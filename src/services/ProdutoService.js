import axios, { Axios } from "axios"

export class ProdutoService{
    URL = "http://localhost:8080/api/produto/"
    
    inserir(produto){
        return axios.post(this.URL, produto)
    }

    alterar(produto) {
        return axios.put(this.URL, produto)
    }

    listar() {
        return axios.get(this.URL)
    }

    excluir(id) {
        return axios.delete(this.URL, id)
    }
}