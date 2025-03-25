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
    if (selectedFgColor && selectedFgColor !== 'default') {
      span.style.color = COLORS[selectedFgColor];
    }
    
    // Apply background color
    if (selectedBgColor && selectedBgColor !== 'default') {
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
            prefix += `\u001b[${COLOR_CODES.fg[colorName]}m`;
            suffix = `\u001b[0m${suffix}`;
          }
        }
        
        // Check for background color
        if (element.style.backgroundColor) {
          const bgColorName = getColorNameFromStyle(element.style.backgroundColor, 'bg');
          if (bgColorName) {
            prefix += `\u001b[${COLOR_CODES.bg[bgColorName]}m`;
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
    // Simple color mapping for common Discord colors
    const rgbMap: Record<string, ColorName> = {
      'rgb(240,71,71)': 'red',
      'rgb(250,166,26)': 'orange',
      'rgb(245,221,66)': 'yellow',
      'rgb(67,181,129)': 'green',
      'rgb(88,101,242)': 'blue',
      'rgb(155,89,182)': 'purple',
      'rgb(255,255,255)': 'white',
      'rgb(35,39,42)': 'black',
      'rgb(116,127,141)': 'default'
    };
    
    const normalizedRgb = `rgb(${rgb[1]},${rgb[2]},${rgb[3]})`;
    if (rgbMap[normalizedRgb]) {
      return rgbMap[normalizedRgb];
    }
  }
  
  return null;
}
