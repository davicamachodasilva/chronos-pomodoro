import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://www.google.com/search?q=o+que+%C3%A9+pomodoro&sca_esv=19d038241e14d62e&biw=1920&bih=945&sxsrf=APpeQnuzmxErg9p70GnTW0KukNwrq6TrPA%3A1787086790588&ei=xseEau24I_nO1sQPkMeUgAo&ved=0ahUKEwjts9eKiauWAxV5p5UCHZAjBaAQ4dUDCBA&uact=5&oq=o+que+%C3%A9+pomodoro&gs_lp=Egxnd3Mtd2l6LXNlcnAiEW8gcXVlIMOpIHBvbW9kb3JvMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHSL0HUMAEWMAEcAF4ApABAJgBAKABAKoBALgBA8gBAPgBAZgCAqACEcICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIOEAAY5AIY1gQYsAPYAQHCAhcQLhjcBhi4BhjaBhjYAhjIAxiwA9gBAZgDAOIDBRIBMSBAiAYBkAYIugYGCAEQARgJkgcBMqAHALIHALgHAMIHBTItMS4xyAcOgAgB&sclient=gws-wiz-serp" className={styles.link}>
        Entenda a técnica pomodoro 
      </a>
      <p className={styles.copyright}>
        Chronos Pomodoro ® 2026
      </p>
    </footer>
  );
}