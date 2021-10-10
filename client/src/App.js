import "./App.css";

import Header from "./components/Header";
import Screen from "./components/Screen";
import Footer from "./components/Footer";

import { HeaderProvider } from "./contexts/HeaderContext";
import { VoteProvider } from "./contexts/VoteContext";

function App() {

  return (
    <HeaderProvider>
      <VoteProvider>
        <Header></Header>
        <Screen></Screen>
        <Footer></Footer>
      </VoteProvider>
    </HeaderProvider>
  );
}

export default App;
