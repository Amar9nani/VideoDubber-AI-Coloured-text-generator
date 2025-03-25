import { Box } from '@mantine/core';

export default function SourceCodeSection() {
  return (
    <Box className="text-center mb-6">
      <h2 style={{
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: 600,
        marginBottom: '8px',
        fontFamily: '"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}>
        Source Code
      </h2>
      <div style={{
        color: '#dcddde',
        fontSize: '14px',
        marginBottom: '16px',
        fontFamily: '"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}>
        This app runs entirely in your browser and the source code is freely available on{' '}
        <a 
          href="https://gist.github.com/rebane2001/07f2d8e80df053c70a1576d27eabe97c" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: '#5865F2',
            textDecoration: 'none',
          }}
          onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
        >
          GitHub
        </a>. Shout out to kkrypt0nn for{' '}
        <a 
          href="https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: '#5865F2',
            textDecoration: 'none',
          }}
          onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
        >
          this guide
        </a>.
      </div>
    </Box>
  );
}
