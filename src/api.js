"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Configuração do Axios
const api = axios_1.default.create({
    baseURL: "http://127.0.0.1:8000/api"
});
// Função para listar produtos
exports.ListarProdutos = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield api.get("/produtos");
    return response.data;
});
exports.criarProduto = (produto) => __awaiter(this, void 0, void 0, function* () {
    const response = yield api.post("produtos", produto);
    return response.data;
});
// Função para deletar um produto
exports.deletarProduto = (id) => __awaiter(this, void 0, void 0, function* () {
    yield api.delete(`/produtos/${id}`);
});
