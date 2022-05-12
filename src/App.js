import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

import AppLayout from "./components/AppLayout/AppLayout";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>Content</AppLayout>
    </ThemeProvider>
  );
}
