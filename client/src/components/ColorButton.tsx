import React from 'react';
import { Box } from '@mantine/core';
import { ColorName, ColorType } from '../lib/colors';

interface ColorButtonProps {
  color: ColorName;
  type: ColorType;
  selected: boolean;
  onClick: () => void;
  colorValue: string;
}

export default function ColorButton({ color, type, selected, onClick, colorValue }: ColorButtonProps) {
  return (
    <Box
      className={`color-btn ${selected ? 'selected' : ''}`}
      style={{
        backgroundColor: colorValue,
        width: '28px',
        height: '28px',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '0 4px',
        border: selected ? '2px solid #ffffff' : '1px solid #2c2f33',
        boxShadow: selected ? '0 0 0 1px #23272A' : 'none',
        transition: 'transform 0.1s ease',
      }}
      data-color={color}
      data-type={type}
      onClick={onClick}
      onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.style) {
          e.currentTarget.style.transform = 'scale(1.1)';
        }
      }}
      onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.style) {
          e.currentTarget.style.transform = '';
        }
      }}
    />
  );
}
