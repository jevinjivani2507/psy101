import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>PSY101 Introduction to Psychology&nbsp;</p>
      </div>

      <div className={styles.studentInfo}>
        <h1>Group Information</h1>
        <div className={styles.info}>
          <h3>Yagnesh Patel</h3>
          <h3 className={styles.rollNo}>AU2040025</h3>
        </div>
        <div className={styles.info}>
          <h3>Jevin Jivani</h3>
          <h3 className={styles.rollNo}>AU2040051</h3>
        </div>
        <div className={styles.info}>
          <h3>Jatin Parmar</h3>
          <h3 className={styles.rollNo}>AU2040118</h3>
        </div>
        <div className={styles.info}>
          <h3>Yug Patel</h3>
          <h3 className={styles.rollNo}>AU2040181</h3>
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
            <p>
              Endless staircase challenges perception of depth and direction.
            </p>
          </a>

          <a
            href="/black-and-purple.html"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Black and Purple <span>-&gt;</span>
            </h2>
            <p>
              Can't distinguish between black and purple? Try this illusion.
            </p>
          </a>

          <a
            href="/cycloid.html"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Cycloid <span>-&gt;</span>
            </h2>
            <p>
              Balls create a square pattern while appearing to move linearly
            </p>
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
            <p>Stream appears larger than it is due to perspective.</p>
          </a>
        </div>
      </div>
    </main>
  );
}
