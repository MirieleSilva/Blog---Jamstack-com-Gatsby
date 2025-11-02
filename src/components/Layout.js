import React from "react";
import "../styles/global.css";
import styled from "styled-components";

const Brand = styled.span`
  font-weight: 800;
  background: linear-gradient(90deg, #8b5cf6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function Layout({ children }) {
  return (
    <div className="container">
      <header className="header">
        <a href="/"><Brand>BLOG TODAY</Brand></a>
        <nav className="nav">
          <a href="/posts">Posts</a>
          <a href="/news">Notícias</a>
          <a href="/projects">Projetos</a>
          <a href="/contato">Contato</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} • Feito com Gatsby • </footer>
    </div>
  );
}
