import styles from "./Heading.module.css";
import { useTheme } from "../hooks/useTheme";
import {
  Timer,
  House,
  History,
  Settings,
  Sun,
  Moon,
} from "lucide-react";

export type Tela = "Inicial" | "Historico" | "Configuracao";

interface HeadingProps {
  setTrocarCompo: (tela: Tela) => void;
  telaAtual: Tela;
}

function Heading({ setTrocarCompo, telaAtual }: HeadingProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles["heading-container"]}>
      <div className={styles["heading-brand"]}>
        <Timer className={styles["brand-icon"]} size={36} />
        <h1 className={styles["brand-title"]}>Chronos</h1>
      </div>

      {/* Navegação: Botões com Ícones */}
      <nav className={styles["heading-nav"]}>
        <ul className={styles["nav-list"]}>
          <li>
            <button
              onClick={() => setTrocarCompo("Inicial")}
              className={`${styles["nav-btn"]} ${telaAtual === "Inicial" ? styles.active : ""}`}
              type="button"
              aria-label="Início"
            >
              <House size={20} />
            </button>
          </li>
          <li>
            <button
              onClick={() => setTrocarCompo("Historico")}
              className={`${styles["nav-btn"]} ${telaAtual === "Historico" ? styles.active : ""}`}
              type="button"
              aria-label="Histórico"
            >
              <History size={20} />
            </button>
          </li>
          <li>
            <button
              onClick={() => setTrocarCompo("Configuracao")}
              className={`${styles["nav-btn"]} ${telaAtual === "Configuracao" ? styles.active : ""}`}
              type="button"
              aria-label="Configurações"
            >
              <Settings size={20} />
            </button>
          </li>
          <li>
            <button
              className={styles["nav-btn"]}
              type="button"
              aria-label="Tema"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Heading;
