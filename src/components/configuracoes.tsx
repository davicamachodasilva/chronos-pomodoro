import { useState } from 'react';
import styles from './Configuracoes.module.css';

export default function Configuracoes() {
  const [foco, setFoco] = useState(25);
  const [descansoCurto, setDescansoCurto] = useState(5);
  const [descansoLongo, setDescansoLongo] = useState(15);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para salvar as configurações
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Configurações</h1>
        <p className={styles.subtitle}>
          Configure os minutos para as etapas do Pomodoro.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Foco */}
          <div className={styles['input-group']}>
            <label htmlFor="foco" className={styles.label}>
              Foco (min):
            </label>
            <input
              id="foco"
              type="number"
              min="1"
              value={foco}
              onChange={(e) => setFoco(Number(e.target.value))}
              className={styles.input}
            />
          </div>

          {/* Descanso curto */}
          <div className={styles['input-group']}>
            <label htmlFor="descansoCurto" className={styles.label}>
              Descanso curto (min):
            </label>
            <input
              id="descansoCurto"
              type="number"
              min="1"
              value={descansoCurto}
              onChange={(e) => setDescansoCurto(Number(e.target.value))}
              className={styles.input}
            />
          </div>

          {/* Descanso longo */}
          <div className={styles['input-group']}>
            <label htmlFor="descansoLongo" className={styles.label}>
              Descanso longo (min):
            </label>
            <input
              id="descansoLongo"
              type="number"
              min="1"
              value={descansoLongo}
              onChange={(e) => setDescansoLongo(Number(e.target.value))}
              className={styles.input}
            />
          </div>

          {/* Botão Salvar */}
          <button
            type="submit"
            aria-label="Salvar configurações"
            className={styles['btn-save']}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className={styles['btn-icon']}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
          </button>
        </form>
      </div>
    </main>
  );
}