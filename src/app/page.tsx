import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <div style={{ border: "3px solid #01fe11" }}>
          <img src="/s.png" alt="s" width="300px" height="300px" />
        </div>
        <div style={{ border: "3px solid #01fe11" }}>
          <img src="/s.png" alt="s" width="300px" height="300px" />
        </div>
        <div style={{ border: "3px solid #01fe11" }}>
          <img src="/s.png" alt="s" width="300px" height="300px" />
        </div>
      </div>
    </main>
  );
}
