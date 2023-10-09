import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>PSY101 Introduction to Psychology&nbsp;</p>
      </div>

      <div className={styles.studentInfo}>
        <div className={styles.info}>
          <h2>Yagnesh Patel</h2>
          <h2 className={styles.rollNo}>AU2040025</h2>
        </div>
        <div className={styles.info}>
          <h2>Jevin Jivani</h2>
          <h2 className={styles.rollNo}>AU2040051</h2>
        </div>
        <div className={styles.info}>
          <h2>Jatin Parmar</h2>
          <h2 className={styles.rollNo}>AU2040118</h2>
        </div>
        <div className={styles.info}>
          <h2>Yug Patel</h2>
          <h2 className={styles.rollNo}>AU2040181</h2>
        </div>
      </div>

      {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
      <div className={styles.bottomBar}>
        <div className={styles.title}>
          <h1 className={styles.bTitle}>Various Illusions</h1>
          <h4 className={styles.bSubTitle}>Here are some inllusions</h4>
        </div>
        <div className={styles.grid}>
          <a
            href="/penrose-stairs.html"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Penrose Stairs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="/black-and-white.html"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Black and White <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="/circles.html"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Circle <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="/optical.html"
            className={styles.card}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Optical <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
