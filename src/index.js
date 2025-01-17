"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const main = () => __awaiter(this, void 0, void 0, function* () {
    console.log("Listando produtos...");
    const produtos = yield api_1.ListarProdutos();
    console.log(produtos);
    console.log("Criando um novo produto...");
    const novoProduto = yield api_1.criarProduto({ nome: "Xícara de chá", preco: 20.99 });
    console.log("Produto criado: ", novoProduto);
    console.log("Deletando produto com ID 1...");
    yield api_1.deletarProduto(1);
    console.log("Produto deletado.");
});
main().catch((error) => console.error("Erro:", error));
