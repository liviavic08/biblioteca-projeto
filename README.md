# Projeto Biblioteca (SPA + API REST)

Aplicação desenvolvida para cadastro, consulta, alteração e exclusão de livros, utilizando uma arquitetura separada entre Frontend (React) e Backend (FastAPI).

Ferramentas utilizadas
-Backend:Python, FastAPI, SQLAlchemy, SQLite, Pydantic, Pytest
-Frontend:React, Vite
-Versionamento:Git e GitHub

Executar a API
1. Abra um terminal na pasta "biblioteca-api"
2. python -m venv .venv
3. Ative o ambiente virtual (.venv\Scripts\activate)
4. pip install -r requirements.txt
5. uvicorn main:app --reload