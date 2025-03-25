import React, { useState } from 'react';
import { Box, Tooltip } from '@mantine/core';
import { ColorName, ColorType } from '../lib/colors';

interface ColorButtonProps {
  color: ColorName;
  type: ColorType;
  selected: boolean;
  onClick: () => void;
  colorValue: string;
}

// Function to format the color name for display
const formatColorName = (name: string): string => {
  const formatMap: Record<string, string> = {
    darkGray: "Dark Gray (33%)",
    red: "Red",
    green: "Yellowish Green",
    gold: "Gold",
    blue: "Light Blue",
    pink: "Pink",
    teal: "Teal",
    white: "White",
    bluishBlack: "Bluish Black",
    rustBrown: "Rust Brown",
    gray40: "Gray (40%)",
    gray45: "Gray (45%)",
    gray55: "Light Gray (55%)",
    blurple: "Blurple",
    gray65: "Light Gray (65%)",
    creamWhite: "Cream White"
  };
  
  return formatMap[name] || name.charAt(0).toUpperCase() + name.slice(1);
};

export default function ColorButton({ color, type, selected, onClick, colorValue }: ColorButtonProps) {
  return (
    <Tooltip 
      label={formatColorName(color)} 
      position="top"
      withArrow
      color="#2f3136"
      styles={{
        tooltip: {
          color: '#ffffff',
          backgroundColor: '#18191c',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          fontSize: '12px',
          padding: '6px 10px',
        }
      }}
    >
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
    </Tooltip>
  );
}
