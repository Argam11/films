import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Menu } from "./component/Header/menu";
import { Routing } from "./Routing/Route";
import { DataProvider } from "./component/Content_cards/main";
import { Footer } from "./component/Footer/footer";
import { ThemeProvider } from './Contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider theme="dark">
      <DataProvider>
        <BrowserRouter>
          <Menu />
          <Routing />
          <Footer />
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider>
  );
}
