import { useState } from 'react';
import styles from './Historico.module.css';

interface HistoryItem {
  id: string;
  task: string;
  duracao: number;
  data: string;
  status: string;
  tipo: string;
}

export default function Historico() {
  const [historyList, setHistoryList] = useState<HistoryItem[]>([
    {
      id: '1',
      task: 'Estudar',
      duracao: 5,
      data: '17/03/2025 18:43',
      status: 'Interrompida',
      tipo: 'Descanso Curto',
    },
    {
      id: '2',
      task: 'Estudar',
      duracao: 25,
      data: '17/03/2025 18:43',
      status: 'Interrompida',
      tipo: 'Trabalho',
    },
    {
      id: '3',
      task: 'Estudar',
      duracao: 5,
      data: '17/03/2025 18:43',
      status: 'Interrompida',
      tipo: 'Descanso Curto',
    },
    {
      id: '4',
      task: 'Estudar',
      duracao: 25,
      data: '17/03/2025 18:43',
      status: 'Interrompida',
      tipo: 'Trabalho',
    },
  ]);

  const handleClearHistory = () => {
    setHistoryList([]);
  };

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Historico</h1>
          <button
            type="button"
            aria-label="Limpar histórico"
            className={styles['btn-clear']}
            onClick={handleClearHistory}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </header>

        <div className={styles['table-container']}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Task ↕</th>
                <th>Duração ↕</th>
                <th>Date ↕</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {historyList.map((item) => (
                <tr key={item.id}>
                  <td>{item.task}</td>
                  <td>{item.duracao}</td>
                  <td>{item.data}</td>
                  <td>{item.status}</td>
                  <td>{item.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}