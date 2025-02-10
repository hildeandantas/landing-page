import axios from "axios";
import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    axios
      .get("https://api.github.com/user/repos", {
        headers: { Authorization: `token ${token}` },
      })
      .then((res) => {
        setRepos(res.data);
        console.log(res.data); // Alterado para imprimir os dados corretamente
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // <- Adicionado array vazio de dependências
  return (
    <div>
      <h1>Projetos</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}
