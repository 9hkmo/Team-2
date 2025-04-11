import { Frist } from "./components/First";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Frist />
    </div>
  );
}

export default App;
