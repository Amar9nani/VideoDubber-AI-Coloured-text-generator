import { createRoot } from "react-dom/client";
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import App from "./App";
import "./index.css";

const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  components: {
    Button: {
      defaultProps: {
        size: 'sm',
      },
      styles: {
        root: {
          backgroundColor: '#3a3d4a',
          color: 'white',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: '#4a4d5a',
          },
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
