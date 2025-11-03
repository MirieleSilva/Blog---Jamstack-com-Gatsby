import * as React from "react";
import Layout from "../components/Layout";
import { Head as SEO } from "../components/SEO";

export default function Contato() {
  const [state, setState] = React.useState({ nome: "", email: "", mensagem: "" });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  function validate() {
    const e = {};
    if (!state.nome.trim()) e.nome = "Informe seu nome";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) e.email = "Email inválido";
    if (state.mensagem.trim().length < 10) e.mensagem = "Mensagem muito curta (mín. 10)";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;

    
    const form = ev.target;
    const data = new FormData(form);
    fetch("/", { method: "POST", body: data })
      .then(() => setSent(true))
      .catch(() => setSent(true));
  }

  return (
    <Layout>
      <h1 style={{ color: "#ffffff", textAlign: "center" }}>Contato</h1>
      {sent ? (
        <div className="card">Obrigado! Sua mensagem foi enviada.</div>
      ) : (
        <form
          name="contato"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="card"
        >
          <input type="hidden" name="form-name" value="contato" />
          <p hidden>
            <label>Não preencha: <input name="bot-field" onChange={() => {}} /></label>
          </p>

          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" value={state.nome} onChange={e=>setState({...state, nome:e.target.value})} />
          {errors.nome && <small className="small">{errors.nome}</small>}

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={state.email} onChange={e=>setState({...state, email:e.target.value})} />
          {errors.email && <small className="small">{errors.email}</small>}

          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows={6} value={state.mensagem} onChange={e=>setState({...state, mensagem:e.target.value})} />
          {errors.mensagem && <small className="small">{errors.mensagem}</small>}

          <button type="submit" style={{marginTop:"0.75rem"}}>Enviar</button>
        </form>
      )}
    </Layout>
  );
}

export { SEO as Head };
