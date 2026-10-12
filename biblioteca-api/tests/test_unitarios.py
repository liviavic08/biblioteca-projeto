from unittest.mock import MagicMock
from schemas import LivroCreate
import services

def test_criar_livro_com_mock():
    db = MagicMock()
    dados = LivroCreate(titulo="Dom Casmurro", autor="Machado de Assis", ano_publicacao=1899, disponivel=True)
    resultado = services.criar_livro(db, dados)
    db.add.assert_called_once()
    db.commit.assert_called_once()
    db.refresh.assert_called_once()
    assert resultado is not None