import { useEffect, useState } from "react";
import { listarLivros, criarLivro, excluirLivro } from "./api";

function App() {
  const [livros, setLivros] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");

  async function carregar() {
    const dados = await listarLivros();
    setLivros(dados);
  }

  async function salvar(event) {
    event.preventDefault();
    await criarLivro({
      titulo,
      autor,
      ano_publicacao: Number(ano),
      disponivel: true
    });
    setTitulo("");
    setAutor("");
    setAno("");
    carregar();
  }

  async function excluir(id) {
    await excluirLivro(id);
    carregar();
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Biblioteca Web</h1>
      <form onSubmit={salvar} style={{ marginBottom: "20px" }}>
        <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Título" required />
        <input value={autor} onChange={e => setAutor(e.target.value)} placeholder="Autor" required />
        <input value={ano} onChange={e => setAno(e.target.value)} placeholder="Ano" type="number" required />
        <button type="submit">Salvar</button>
      </form>

      <h2>Livros cadastrados</h2>
      {livros.map(livro => (
        <div key={livro.id} style={{ marginBottom: "10px" }}>
          <strong>{livro.titulo}</strong> - {livro.autor} ({livro.ano_publicacao})
          <button onClick={() => excluir(livro.id)} style={{ marginLeft: "10px" }}>Excluir</button>
        </div>
      ))}
    </main>
  );
}

export default App;