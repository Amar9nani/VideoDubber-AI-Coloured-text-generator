import { Container, Title, Text, Box } from '@mantine/core';
import AboutSection from './components/AboutSection';
import SourceCodeSection from './components/SourceCodeSection';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <Box style={{ backgroundColor: '#36393f', minHeight: '100vh' }}>
      <Container size="md" px="md" py="lg" className="max-w-3xl">
        <Title 
          order={1} 
          className="text-center font-bold mb-4 pt-4"
          styles={() => ({
            root: {
              color: '#ffffff',
              fontSize: '28px',
              fontFamily: '"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }
          })}
        >
          Rebane's Discord <span style={{ color: '#5865F2' }}>Colored</span> Text Generator
        </Title>
        
        <AboutSection />
        <SourceCodeSection />
        <TextEditor />
        
        <Text 
          size="xs" 
          className="text-center mt-8 pb-4"
          styles={() => ({
            root: {
              color: '#a3a6aa',
              fontSize: '11px',
              fontFamily: '"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }
          })}
        >
          This is an unofficial tool, it is not made or endorsed by Discord.
        </Text>
      </Container>
    </Box>
  );
}

export default App;
