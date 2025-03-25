import { useState, useRef, useCallback } from 'react';
import { ColorName, COLOR_CODES, COLORS } from '../lib/colors';

export default function useTextEditor() {
  const [selectedFgColor, setSelectedFgColor] = useState<ColorName | null>(null);
  const [selectedBgColor, setSelectedBgColor] = useState<ColorName | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  const resetEditor = useCallback(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = '';
    }
    setSelectedFgColor(null);
    setSelectedBgColor(null);
  }, []);

  const applyBold = useCallback(() => {
    document.execCommand('bold', false);
  }, []);

  const applyLine = useCallback(() => {
    document.execCommand('underline', false);
  }, []);

  const applyFormatting = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    
    const range = selection.getRangeAt(0);
    if (range.collapsed) return;
    
    // Create a span with the selected color styling
    const span = document.createElement('span');
    
    // Apply foreground color
    if (selectedFgColor) {
      span.style.color = COLORS[selectedFgColor];
    }
    
    // Apply background color
    if (selectedBgColor) {
      span.style.backgroundColor = COLORS[selectedBgColor];
    }
    
    // If no formatting to apply, don't wrap in span
    if (span.style.length === 0) return;
    
    // Extract contents from range and wrap in the styled span
    span.appendChild(range.extractContents());
    range.insertNode(span);
    
    // Clear selection
    selection.removeAllRanges();
  }, [selectedFgColor, selectedBgColor]);

  const generateFormattedText = useCallback(() => {
    if (!editorRef.current) return '';
    
    let result = '```ansi\n';
    
    const walkNodes = (node: Node): string => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent || '';
      }
      
      if (node.nodeType === Node.ELEMENT_NODE) {
        let content = '';
        let prefix = '';
        let suffix = '';
        
        const element = node as HTMLElement;
        
        // Check for color styling
        if (element.style.color) {
          // Map the color to ANSI code
          const colorName = getColorNameFromStyle(element.style.color, 'fg');
          if (colorName) {
            const code = COLOR_CODES.fg[colorName as keyof typeof COLOR_CODES.fg];
            prefix += `\u001b[${code}m`;
            suffix = `\u001b[0m${suffix}`;
          }
        }
        
        // Check for background color
        if (element.style.backgroundColor) {
          const bgColorName = getColorNameFromStyle(element.style.backgroundColor, 'bg');
          if (bgColorName) {
            const code = COLOR_CODES.bg[bgColorName as keyof typeof COLOR_CODES.bg];
            prefix += `\u001b[${code}m`;
            suffix = `\u001b[0m${suffix}`;
          }
        }
        
        // Check for bold
        if (element.tagName === 'B' || element.tagName === 'STRONG' || 
            window.getComputedStyle(element).fontWeight >= '700') {
          prefix += '\u001b[1m';
          suffix = '\u001b[22m' + suffix;
        }
        
        // Check for underline
        if (element.tagName === 'U' || 
            window.getComputedStyle(element).textDecoration.includes('underline')) {
          prefix += '\u001b[4m';
          suffix = '\u001b[24m' + suffix;
        }
        
        // Process child nodes
        for (let i = 0; i < element.childNodes.length; i++) {
          content += walkNodes(element.childNodes[i]);
        }
        
        return prefix + content + suffix;
      }
      
      return '';
    };
    
    result += walkNodes(editorRef.current);
    result += '\n```';
    
    return result;
  }, []);

  const copyFormattedText = useCallback(() => {
    const formattedText = generateFormattedText();
    return navigator.clipboard.writeText(formattedText);
  }, [generateFormattedText]);

  return {
    editorRef,
    selectedFgColor,
    setSelectedFgColor,
    selectedBgColor,
    setSelectedBgColor,
    resetEditor,
    applyBold,
    applyLine,
    applyFormatting,
    copyFormattedText
  };
}

// Helper function to map CSS color to our color names
function getColorNameFromStyle(styleColor: string, type: 'fg' | 'bg'): ColorName | null {
  // Find closest match from our color palette
  for (const [name, value] of Object.entries(COLORS)) {
    // Simple comparison - in a real app, might need RGB conversion for more accurate matching
    if (styleColor.toLowerCase() === value.toLowerCase() || 
        styleColor.replace(/\s/g, '') === value.replace(/\s/g, '')) {
      return name as ColorName;
    }
  }
  
  // Handle RGB format
  const rgb = styleColor.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
  if (rgb) {
    // Simple color mapping for Discord colors based on our new palette
    const rgbMap: {[key: string]: ColorName} = {
      // Foreground Colors
      'rgb(124,127,130)': 'darkGray',   // dark gray - 33%
      'rgb(240,71,71)': 'red',          // red
      'rgb(149,211,110)': 'green',      // yellowish green
      'rgb(250,166,26)': 'gold',        // gold
      'rgb(56,161,242)': 'blue',        // light blue
      'rgb(255,115,250)': 'pink',       // pink
      'rgb(38,198,218)': 'teal',        // teal
      'rgb(255,255,255)': 'white',      // white
      
      // Background Colors
      'rgb(47,49,54)': 'bluishBlack',   // bluish black
      'rgb(143,85,71)': 'rustBrown',    // rust brown
      'rgb(116,127,141)': 'gray40',     // grey - 40%
      'rgb(130,138,151)': 'gray45',     // grey - 45%
      'rgb(144,153,164)': 'gray55',     // light grey - 55%
      'rgb(88,101,242)': 'blurple',     // blurple
      'rgb(184,192,204)': 'gray65',     // light grey - 65%
      'rgb(242,243,245)': 'creamWhite'  // cream white
    };
    
    const normalizedRgb = `rgb(${rgb[1]},${rgb[2]},${rgb[3]})`;
    if (rgbMap[normalizedRgb]) {
      return rgbMap[normalizedRgb];
    }
  }
  
  return null;
}
