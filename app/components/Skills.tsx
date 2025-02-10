import styles from "@/app/styles/skills.module.css";
import { FaPython } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "Javascript", icon: <></> },
    { name: "Typescript", icon: <></> },
    { name: "Node.js", icon: <></> },
    { name: "React", icon: <></> },
    { name: "Next.js", icon: <></> },
    { name: "Tailwind", icon: <></> },
    { name: "SQL Server", icon: <></> },
    { name: "Transact SQL", icon: <></> },
    { name: "MySql", icon: <></> },
    { name: "Postgress", icon: <></> },
    { name: "Oracle", icon: <></> },
  ];

  return (
    <div className="contentContainer">
      <div className="w-full h-4/5 overflow-hidden">
        <h1 className="text-6xl font-semibold text-white">Skills</h1>
        <section className="flex overflow-hidden gap-2">
          {skills.map((skill) => (
            <span
              className="rounded-md min-w-[240px] h-[360px] border flex-shrink-0"
              key={skill.name}
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </section>
      </div>
    </div>
  );
}
