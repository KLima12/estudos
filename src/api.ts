import axios from "axios";
import { promises } from "dns";

// Definição do tipo Produto

type Produto = { 
    id: number,
    nome:string, 
    preco: number
};

// Configuração do Axios
const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
})

// Função para listar produtos
export const ListarProdutos = async (): Promise<Produto[]> => {
    const response = await api.get<Produto[]>("/produtos")
    return response.data
}

export const criarProduto = async (produto: Omit<Produto, "id">): Promise<Produto> => { 
    const response = await api.post<Produto>("produtos", produto);
    return response.data
}

// Função para deletar um produto
export const deletarProduto = async (id: number): Promise<void> => { 
    await api.delete(`/produtos/${id}`)
}