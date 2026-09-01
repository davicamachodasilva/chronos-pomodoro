import { useState } from "react";
import "./App.css";
import Configuracoes, {
  type ConfiguracoesTempo,
} from "./components/Configuracoes";
import Erro from "./components/Erro";
import Footer from "./components/Footer";
import Heading, { type Tela } from "./components/Heading";
import Historico from "./components/Historico";
import Inicial from "./components/Inicial";

function App() {
  const [trocarCompo, setTrocarCompo] = useState<Tela>("Inicial");

  const [config, setConfig] = useState<ConfiguracoesTempo>({
    foco: 25,
    descansoCurto: 5,
    descansoLongo: 15,
  });

const handleSalvarCofiguracoes = (novasConfig: ConfiguracoesTempo) =>{
  setConfig(novasConfig)
  setTrocarCompo("Inicial")
}

  const mudarCompo = () => {
    switch (trocarCompo) {
      case "Inicial":
        return <Inicial config={config}/>;
      case "Configuracao":
        return <Configuracoes onSalvar={handleSalvarCofiguracoes}/>;
      case "Historico":
        return <Historico />;
      default:
        return <Erro />;
    }
  };

  return (
    <>
      <Heading setTrocarCompo={setTrocarCompo} telaAtual={trocarCompo} />
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
