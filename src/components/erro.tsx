import styles from './Erro.module.css';

export default function Erro() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          404 - Página não encontrada 
        </h1>

        <p>
          Opa! Parece que a página que você está tentando acessar não existe.
          Talvez ela tenha tirado férias, resolvido explorar o universo ou se
          perdido em algum lugar entre dois buracos negros. 
        </p>

        <p>
          Mas calma, você não está perdido no espaço (ainda). Dá pra voltar em
          segurança para a{' '}
          <a href="/" className={styles.link}>
            página principal
          </a>{' '}
          ou{' '}
          <button
            onClick={() => window.history.back()}
            className={styles.link}
          >
            para o histórico
          </button>{' '}
          — ou pode ficar por aqui e fingir que achou uma página secreta que só
          os exploradores mais legais conseguem acessar. 
        </p>

        <p>
          Se você acha que essa página deveria existir (ou se quiser bater um
          papo sobre viagem no tempo e buracos de minhoca), é só entrar em
          contato. Caso contrário, use o menu para voltar ao mundo real.
        </p>

        <p className={styles.reflection}>
          Enquanto isso, fica aqui uma reflexão: &quot;Se uma página não existe
          na internet, será que ela existiu de verdade?&quot; 
        </p>
      </div>
    </main>
  );
}