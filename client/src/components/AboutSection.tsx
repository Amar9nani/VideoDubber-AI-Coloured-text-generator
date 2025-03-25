import { Title, Text, Box } from '@mantine/core';

export default function AboutSection() {
  return (
    <Box className="text-center mb-6">
      <Title order={2} className="font-bold text-xl mb-2">About</Title>
      <Text size="sm" className="mb-4">
        This is a simple app that creates colored Discord messages using the 
        ANSI color codes available on the latest Discord desktop versions.
      </Text>
      <Text size="sm" className="mb-4">
        To use this, write your text, select parts of it and assign colors to them,
        then copy it using the button below, and send it in a Discord message.
      </Text>
    </Box>
  );
}
