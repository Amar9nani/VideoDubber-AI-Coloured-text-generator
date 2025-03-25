import { useState, useEffect } from 'react';
import { Box, Title, Button, Flex } from '@mantine/core';
import TextControls from './TextControls';
import ColorSelector from './ColorSelector';
import useTextEditor from '../hooks/useTextEditor';
import { ColorName } from '../lib/colors';

export default function TextEditor() {
  const { 
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
  } = useTextEditor();

  const [copyButtonText, setCopyButtonText] = useState('Copy text as Discord formatted');

  useEffect(() => {
    // Initialize the editor with sample text
    if (editorRef.current) {
      editorRef.current.innerHTML = 'Welcome to <span style="color: #f04747;">Rebane\'s</span> <span style="color: #5865F2;">Discord</span> <span style="color: #43b581;">Colored</span> Text Generator!';
    }
  }, []);

  const handleCopy = async () => {
    try {
      await copyFormattedText();
      setCopyButtonText('Copied!');
      setTimeout(() => {
        setCopyButtonText('Copy text as Discord formatted');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      setCopyButtonText('Failed to copy');
      setTimeout(() => {
        setCopyButtonText('Copy text as Discord formatted');
      }, 2000);
    }
  };

  const handleMouseUp = () => {
    applyFormatting();
  };

  return (
    <Box className="mb-6">
      <Title order={2} className="font-bold text-xl mb-4 text-center">
        Create your text
      </Title>
      
      <TextControls 
        onReset={resetEditor}
        onBold={applyBold}
        onLine={applyLine}
      />
      
      <ColorSelector
        type="fg"
        selectedColor={selectedFgColor}
        onSelectColor={(color) => setSelectedFgColor(color as ColorName | null)}
      />
      
      <ColorSelector
        type="bg"
        selectedColor={selectedBgColor}
        onSelectColor={(color) => setSelectedBgColor(color as ColorName | null)}
      />
      
      <Box 
        className="editor colored-text" 
        contentEditable 
        ref={editorRef}
        onMouseUp={handleMouseUp}
        onKeyUp={handleMouseUp}
      />
      
      <Flex justify="center" className="mt-4">
        <Button 
          onClick={handleCopy}
          className="px-4 py-2"
          color="indigo"
          styles={() => ({
            root: {
              backgroundColor: '#5865F2',
              '&:hover': {
                backgroundColor: '#4752c4'
              },
              borderRadius: '3px',
              border: 'none'
            }
          })}
        >
          {copyButtonText}
        </Button>
      </Flex>
    </Box>
  );
}
