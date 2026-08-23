import { useState } from "react";
import "./App.css";
 import Configuracoes from './components/Configuracoes'
 import Erro from './components/Erro'
import Footer from "./components/Footer";
import Heading, {type Tela} from "./components/Heading";
import Historico from "./components/Historico";
 import Inicial from './components/Inicial'

function App() {
  const [trocarCompo, setTrocarCompo] = useState<Tela>('Inicial');

  const mudarCompo = () => {
    switch (trocarCompo) {
      case 'Inicial':
        return <Inicial />;
      case 'Configuracao':
        return <Configuracoes />;
      case 'Historico':
        return <Historico />;
      default:
        return <Erro />;
    }
  };

  return (
    <>
      <Heading  setTrocarCompo={setTrocarCompo} telaAtual={trocarCompo}/>
      {mudarCompo()}
      {/* <Inicial/> */}
      {/* <Configuracoes/> */}
      {/* <Erro/> */}
      {/* <Historico /> */}
      <Footer />
    </>
  );
}

export default App;
