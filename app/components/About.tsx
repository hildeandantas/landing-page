import Image from "next/image";
import styles from "@/app/styles/about.module.css";

export default function About() {
  return (
    <div className="contentContainer">
      <Image
        className="rounded-full"
        src="/photo_2024-08-27_14-40-04.jpg"
        width={400}
        height={400}
        alt="Hildean Dantas"
      />
      <div className={styles.textContainer}>
        <h1 className="text-6xl font-semibold text-white slide-up">
          Sobre mim
        </h1>
        <div className={styles.typingContainer}>
          <p className="text-lg text-[#d6dae1] slide-up delay-1">
            Olá, muito prazer! Eu me chamo Hildean Dantas, sou programador
            FullStack e trabalho com programação a pouco mais de 3 anos. Sou
            apaixonado por tecnologia e estou sempre buscando aprender novas
            coisas e melhorar profissionalmente.
          </p>
        </div>

        <section className="rounded-sm grid grid-cols-2 gap-2 slide-up delay-2">
          <p>
            <strong>Idade:</strong> 20 anos
          </p>
          <p>
            <strong>Experiência</strong> Profissional: 3 anos
          </p>
          <p>
            <strong>Localidade:</strong> Rio de Janeiro, Brasil
          </p>
          <p>
            <strong>Telefone:</strong> (21)97601-2475
          </p>
        </section>
      </div>
    </div>
  );
}
