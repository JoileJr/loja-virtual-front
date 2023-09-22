import React, { useState, useEffect } from 'react'
import { ProdutoService } from '../../services/ProdutoService';
import { useNavigate } from "react-router-dom";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

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

    const alterar = (rowData) => {
        navigate("/produto-formulario", {state: {produtoAlterar: rowData}})
    }

    const optionColumn = (rowData) => {
        return (
            <>
                <Button label='Alterar' severity='warning' onClick={() => alterar(rowData)}/>
            </>
        )
    }

    return (
        <div>
            <h2>Lista de produtos</h2>
            <button onClick={formulario}>Novo produto</button>
            <br /><br />
            <DataTable value={produtos} tableStyle={{ minWidth: '60rem' }}>
                <Column field="descricaoCurta" header="Name"></Column>
                <Column field="descricaoDetalhada" header="descrição"></Column>
                <Column field="valorCusto" header="Preço de compra"></Column>
                <Column field="valorVenda" header="Preço de Venda"></Column>
                <Column header="Opções" body={optionColumn}></Column>
            </DataTable>
        </div>
    )
}

export default ProdutoList