import { Flex, Button } from '@mantine/core';

interface TextControlsProps {
  onReset: () => void;
  onBold: () => void;
  onLine: () => void;
}

export default function TextControls({ onReset, onBold, onLine }: TextControlsProps) {
  return (
    <Flex justify="center" className="mb-4">
      <Button 
        onClick={onReset} 
        className="mantine-button mr-2"
      >
        Reset All
      </Button>
      <Button 
        onClick={onBold} 
        className="mantine-button mr-2"
      >
        Bold
      </Button>
      <Button 
        onClick={onLine} 
        className="mantine-button"
      >
        Line
      </Button>
    </Flex>
  );
}
