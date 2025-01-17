import { ListarProdutos, criarProduto, deletarProduto } from "./api";

const main = async () => { 
    console.log("Listando produtos...")
    const produtos = await ListarProdutos();
    console.log(produtos)

    
    console.log("Criando um novo produto...")
    const novoProduto = await criarProduto({nome: "Xícara de chá", preco: 20.99})
    console.log("Produto criado: ", novoProduto)

    console.log("Deletando produto com ID 1...")
    await deletarProduto(1)
    console.log("Produto deletado.")
};

main().catch((error) => console.error("Erro:", error))
