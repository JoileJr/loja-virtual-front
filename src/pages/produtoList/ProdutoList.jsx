import React, { useState, useEffect } from 'react'
import { ProdutoService } from '../../services/ProdutoService';
import { useNavigate } from "react-router";

const ProdutoList = () => {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);
    const produtoService = new ProdutoService();

    useEffect(() => {
        buscarProdutos();
    }, []);

    const buscarProdutos = ()=> {
        produtoService.listar().then(data =>{
            setProdutos(data.data)
        })
    }

    const formulario = () => {
        navigate("/produto-formulario")
    }

    return (
        <div>
            <h2>Lista de produtos</h2>
            <button onClick={formulario}>Novo produto</button>
            <br /><br />
            {produtos.map(produto=>{
                <p key={produto.id}>{produto.descricaoCurta}</p>
            })}
        </div>
    )
}

export default ProdutoList