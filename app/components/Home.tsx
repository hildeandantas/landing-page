import Image from "next/image";
import styles from "@/app/styles/home.module.css";
import { useEffect, useState } from "react";
export default function Home() {
  const exibition = [
    "Python",
    "Javascript",
    "Typescript",
    "Node.js",
    "React",
    "Next.js",
    "Tailwind",
    "SQL Server",
    "Transact SQL",
    "MySQL",
    "Postgres",
    "Oracle",
    "FullStack",
  ];

  const [textExibition, setTextExibition] = useState<string>("FullStack");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTextExibition(exibition[index]);
      index = (index + 1) % exibition.length;
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="contentContainer">
      <span className={styles.textContainer}>
        <p className="text-3xl text-slide">Olá, eu me chamo</p>
        <h1 className="text-6xl font-semibold text-slide delay-1">
          Hildean Dantas
        </h1>
        <h2 className="text-2xl text-slide delay-2">
          E sou Desenvolvedor <strong>{textExibition}</strong>
        </h2>
      </span>
      <span>
        <Image
          className="zoomIn rounded-full"
          src={"/photo_2024-08-27_14-40-04.jpg"}
          width={300}
          height={300}
          alt="Hildean Dantas"
        />
      </span>
    </div>
  );
}
