import Wrapper from "./components/Wrapper";
import { GlobalProvider } from "./context/GlobalContext";
import { GloabalStyles } from "./GlobalStyles/GlobalStyles";

function App() {
  return (
    <GlobalProvider>
      <Wrapper></Wrapper>
      <GloabalStyles />
    </GlobalProvider>
  );
}

export default App;
