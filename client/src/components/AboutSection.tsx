import { Box } from '@mantine/core';

export default function AboutSection() {
  return (
    <Box className="text-center mb-6">
      <h2 style={{
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: 600,
        marginBottom: '8px',
        fontFamily: '"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}>
        About
      </h2>
      <div style={{
        color: '#dcddde',
        fontSize: '14px',
        marginBottom: '16px',
        fontFamily: '"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}>
        This is a simple app that creates colored Discord messages using the 
        ANSI color codes available on the latest Discord desktop versions.
      </div>
      <div style={{
        color: '#dcddde',
        fontSize: '14px',
        marginBottom: '16px',
        fontFamily: '"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}>
        To use this, write your text, select parts of it and assign colors to them,
        then copy it using the button below, and send it in a Discord message.
      </div>
    </Box>
  );
}
