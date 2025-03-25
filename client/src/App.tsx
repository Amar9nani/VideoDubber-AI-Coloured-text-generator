import { Container, Title, Text } from '@mantine/core';
import AboutSection from './components/AboutSection';
import SourceCodeSection from './components/SourceCodeSection';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <Container size="md" px="md" py="lg" className="max-w-3xl">
      <Title order={1} className="text-center text-2xl font-bold mb-2">
        Rebane's Discord <span style={{ color: '#5865F2' }}>Colored</span> Text Generator
      </Title>
      
      <AboutSection />
      <SourceCodeSection />
      <TextEditor />
      
      <Text size="xs" className="text-center text-gray-400 mt-8">
        This is an unofficial tool, it is not made or endorsed by Discord.
      </Text>
    </Container>
  );
}

export default App;
