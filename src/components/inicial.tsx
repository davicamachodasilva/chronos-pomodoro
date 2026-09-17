import { useState, useEffect, useRef } from "react";
import styles from "./Inicial.module.css";
import type { ConfiguracoesTempo } from "./Configuracoes";

interface InicialProps {
  config?: ConfiguracoesTempo;
}

export default function Inicial({ config }: InicialProps) {
  const [task, setTask] = useState("Estudar");
  const [indiceCiclo, setIndiceCiclo] = useState(0);
  const [ativo, setAtivo] = useState(false);

  // Valores padrão de segurança
  const foco = config?.foco ?? 25;
  const descansoCurto = config?.descansoCurto ?? 5;
  const descansoLongo = config?.descansoLongo ?? 15;

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

  const tocarAlarme = () => {
    const audio = new Audio("/audios/among-us-role-reveal-sound.mp3");
    audio.play().catch((err) => console.log("Erro ao reproduzir o som:", err));
  };

  // Função auxiliar para retornar os minutos de cada etapa do ciclo
  const getDuracaoMinutos = (indice: number) => {
    if (indice % 2 === 0) return foco;
    if (indice === 7) return descansoLongo;
    return descansoCurto;
  };

  const getTextoCiclo = (indice: number) => {
    if (indice === 7) return "faça um descanso longo";
    if (indice % 2 === 0) return "foque";
    return "descanse";
  };

  const mudarCiclo = (novoIndice: number) => {
    setIndiceCiclo(novoIndice);
    setTempoRestante(getDuracaoMinutos(novoIndice) * 60);
    setAtivo(false);
  };

  // Estado inicial do tempo
  const [tempoRestante, setTempoRestante] = useState(
    () => getDuracaoMinutos(0) * 60,
  );

  const tempoFinalRef = useRef<number | null>(null);

  const formatarTempo = (segundosTotais: number) => {
    const min = Math.floor(segundosTotais / 60);
    const seg = segundosTotais % 60;
    return `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
  };

  useEffect(() => {
    const tempoFormatado = formatarTempo(tempoRestante);
    const status = getTextoCiclo(indiceCiclo);

    if (ativo) {
      document.title = `${tempoFormatado} - ${status}`;
    } else {
      document.title = "Pomodoro Timer";
    }
  }, [tempoRestante, ativo, indiceCiclo]);

  // Unico useEffect necessário: apenas para rodar a contagem regressiva
  useEffect(() => {
    if (!ativo) return;

    const intervalo = setInterval(() => {
      if (!tempoFinalRef.current) return;

      const agora = Date.now();
      const diferencaSegundos = Math.ceil(
        (tempoFinalRef.current - agora) / 1000,
      );

      if (diferencaSegundos <= 0) {
        tocarAlarme();
        const proximo = (indiceCiclo + 1) % cycles.length;
        mudarCiclo(proximo);
      } else {
        setTempoRestante(diferencaSegundos);
      }
    }, 200);

    return () => clearInterval(intervalo);
  }, [ativo, indiceCiclo, foco, descansoCurto, descansoLongo]);

  const toggleTimer = () => {
    if (!ativo) {
      tempoFinalRef.current = Date.now() + tempoRestante * 1000;
      setAtivo(true);
    } else {
      setAtivo(false);
      tempoFinalRef.current = null;
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.timer}>{formatarTempo(tempoRestante)}</h1>

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
          Nesse ciclo <strong>{getTextoCiclo(indiceCiclo)}</strong> por{" "}
          <strong>{getDuracaoMinutos(indiceCiclo)} min</strong>.
        </p>

        <div className={styles["cycles-container"]}>
          <span className={styles.label}>Ciclos:</span>
          <div className={styles["cycles-list"]}>
            {cycles.map((color, index) => (
              <span
                key={index}
                className={styles["cycle-dot"]}
                style={{
                  backgroundColor: color,
                  opacity: index === indiceCiclo ? 1 : 0.3,
                  transform: index === indiceCiclo ? "scale(1.2)" : "scale(1)",
                  transition: "all 0.2s ease",
                }}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label={ativo ? "Pausar" : "Iniciar"}
          className={styles["btn-start"]}
          onClick={toggleTimer}
        >
          {ativo ? (
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
              <rect x="9" y="8" width="2" height="8" fill="currentColor" />
              <rect x="13" y="8" width="2" height="8" fill="currentColor" />
            </svg>
          ) : (
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
          )}
        </button>
      </div>
    </main>
  );
}
