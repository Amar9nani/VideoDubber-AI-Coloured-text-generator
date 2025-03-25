import { Flex, Button } from '@mantine/core';

interface TextControlsProps {
  onReset: () => void;
  onBold: () => void;
  onLine: () => void;
}

export default function TextControls({ onReset, onBold, onLine }: TextControlsProps) {
  const buttonStyle = {
    root: {
      backgroundColor: '#4f545c',
      '&:hover': {
        backgroundColor: '#72767d'
      },
      borderRadius: '3px',
      border: 'none',
      marginRight: '8px'
    }
  };

  return (
    <Flex justify="center" className="mb-4">
      <Button 
        onClick={onReset} 
        className="mr-2"
        color="gray"
        styles={() => buttonStyle}
      >
        Reset All
      </Button>
      <Button 
        onClick={onBold} 
        className="mr-2"
        color="gray"
        styles={() => buttonStyle}
      >
        Bold
      </Button>
      <Button 
        onClick={onLine}
        color="gray" 
        styles={() => buttonStyle}
      >
        Line
      </Button>
    </Flex>
  );
}
