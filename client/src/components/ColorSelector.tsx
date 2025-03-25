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

  return (
    <Flex justify="center" align="center" className="mb-2">
      <Text className="w-8 mr-2 text-right">{type.toUpperCase()}</Text>
      <Flex>
        {Object.entries(COLORS).map(([color, value]) => (
          <ColorButton
            key={color}
            color={color as ColorName}
            type={type}
            selected={selectedColor === color}
            onClick={() => handleClick(color as ColorName)}
            colorValue={value}
          />
        ))}
      </Flex>
    </Flex>
  );
}
