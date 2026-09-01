import { useState } from "react";
import styles from "./Inicial.module.css";
import type { ConfiguracoesTempo } from "./Configuracoes";
// import Configuracoes from "./Configuracoes";

interface InicialProps{
  config:ConfiguracoesTempo
}

export default function Inicial({config}: InicialProps) {
  const [task, setTask] = useState("Estudar");

  const cycles = [
    "#f59e0b",
    "#10b981",
    "#f59e0b",
    "#10b981",
    "#f59e0b",
    "#10b981",
    "#f59e0b",
    "#0ea5e9",
  ];

return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.timer}>{config.foco}:00</h1>

        <div className={styles["input-group"]}>
          <label htmlFor="task" className={styles.label}>
            task:
          </label>
          <input
            id="task"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className={styles.input}
          />
        </div>

        <p className={styles.description}>
          Nesse ciclo <strong>foque</strong> por <strong>{config.foco} min</strong>.
        </p>

        <div className={styles["cycles-container"]}>
          <span className={styles.label}>Ciclos:</span>
          <div className={styles["cycles-list"]}>
            {cycles.map((color, index) => (
              <span
                key={index}
                className={styles["cycle-dot"]}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Iniciar"
          className={styles["btn-start"]}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={styles["btn-icon"]}
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <polygon points="10,8 16,12 10,16" fill="currentColor" />
          </svg>
        </button>
      </div>
    </main>
  );
}
