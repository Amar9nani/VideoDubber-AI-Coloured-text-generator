import { Box, Flex, Text } from '@mantine/core';
import ColorButton from './ColorButton';
import { COLORS, ColorName, ColorType } from '../lib/colors';

interface ColorSelectorProps {
  type: ColorType;
  selectedColor: ColorName | null;
  onSelectColor: (color: ColorName | null) => void;
}

export default function ColorSelector({ type, selectedColor, onSelectColor }: ColorSelectorProps) {
  const handleClick = (color: ColorName) => {
    if (selectedColor === color) {
      onSelectColor(null);
    } else {
      onSelectColor(color);
    }
  };

  // Filter colors based on type (foreground or background)
  const fgColors = ['darkGray', 'red', 'green', 'gold', 'blue', 'pink', 'teal', 'white'];
  const bgColors = ['bluishBlack', 'rustBrown', 'gray40', 'gray45', 'gray55', 'blurple', 'gray65', 'creamWhite'];
  
  const displayColors = type === 'fg' ? fgColors : bgColors;

  return (
    <Flex justify="center" align="center" className="mb-2">
      <Text 
        className="w-8 mr-2 text-right"
        styles={() => ({
          root: {
            color: '#b9bbbe',
            fontSize: '14px',
            fontFamily: '"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 600
          }
        })}
      >
        {type.toUpperCase()}
      </Text>
      <Flex>
        {displayColors.map((colorName) => (
          <ColorButton
            key={colorName}
            color={colorName as ColorName}
            type={type}
            selected={selectedColor === colorName}
            onClick={() => handleClick(colorName as ColorName)}
            colorValue={COLORS[colorName as keyof typeof COLORS]}
          />
        ))}
      </Flex>
    </Flex>
  );
}
