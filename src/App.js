import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dashboard from "./components/dashboard";
import BlogDetail from "./components/BlogDetail";
import PropertySearchTool from "./components/PropertySearchTool";

const theme = createTheme({
  typography: {
    fontFamily: "manrope",
    h1: {
      fontSize: "64px",
    },
    h2: {
      fontSize: "58px",
    },
    h3: {
      fontSize: "48px",
    },
    h4: {
      fontSize: "40px",
    },
    h5: {
      fontSize: "32px",
    },
    h6: {
      fontSize: "20px",
    },
    title1: {
      fontSize: "32px",
    },
    title2: {
      fontSize: "24px",
    },
    body1: {
      fontSize: "18px",
    },
    body2: {
      fontSize: "16px",
    },
    caption: {
      fontSize: "12px",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/blog/:blogId" element={<BlogDetail />} />
            <Route path="/propertySearch" element={<PropertySearchTool />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
