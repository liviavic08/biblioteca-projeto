# Projeto Biblioteca (SPA + API REST)

Aplicação desenvolvida para cadastro, consulta, alteração e exclusão de livros, utilizando uma arquitetura separada entre Frontend (React) e Backend (FastAPI).

Ferramentas utilizadas
-Backend:Python, FastAPI, SQLAlchemy, SQLite, Pydantic, Pytest
-Frontend:React, Vite
-Versionamento:Git e GitHub

1. Executar a API
Abra um terminal na pasta "biblioteca-api"
python -m venv .venv
Ative o ambiente virtual (.venv\Scripts\activate)
pip install -r requirements.txt
uvicorn main:app --reload