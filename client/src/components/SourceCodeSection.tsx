import { Title, Text, Box, Anchor } from '@mantine/core';

export default function SourceCodeSection() {
  return (
    <Box className="text-center mb-6">
      <Title order={2} className="font-bold text-xl mb-2">Source Code</Title>
      <Text size="sm" className="mb-4">
        This app runs entirely in your browser and the source code is freely available on{' '}
        <Anchor 
          href="https://gist.github.com/rebane2001/07f2d8e80df053c70a1576d27eabe97c" 
          target="_blank" 
          rel="noopener noreferrer"
          underline="hover"
          c="#5865F2"
        >
          GitHub
        </Anchor>. Shout out to kkrypt0nn for{' '}
        <Anchor 
          href="https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06" 
          target="_blank" 
          rel="noopener noreferrer"
          underline="hover"
          c="#5865F2"
        >
          this guide
        </Anchor>.
      </Text>
    </Box>
  );
}
