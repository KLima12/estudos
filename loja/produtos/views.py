from ninja import NinjaAPI, Schema
from typing import List

api = NinjaAPI()

class ProdutosSchema(Schema):
    id: int
    nome: str
    preco: float

produtos = [
    {"id": 1, "nome": "Caneca de Cerâmica", "Preco": 35.50},
    {"id": 2, "nome": "Prato de Porcelana", "Preco": 120.20}
]

@api.get("/produtos", response=List[ProdutosSchema])
def listar_produtos(request):
    return produtos

@api.post("/produtos", response=ProdutosSchema)
def criar_produto(request, produto:ProdutosSchema):
    novo_produto = {"id": len(produtos) + 1. **produto.dict()}
    produtos.append(novo_produto)
    return novo_produto

@api.delete("/produtos/{produto_id}", response=dict)
def deletar_produto(request, produto_id: int):
    global produtos
    produtos = [p for p in produtos if p["id"] != produto_id]
    return {"message": "Produto removido com sucesso"}
