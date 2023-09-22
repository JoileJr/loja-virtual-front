import React, { useState, useEffect } from 'react'
import { ProdutoService } from '../../services/ProdutoService';
import styles from './ProdutoForm.module.css';
import { useLocation } from 'react-router-dom';

const ProdutoForm = () => {
    const produtoNovo = { descricaoCurta: '', descricaoDetalhada: '', valorCusto: null, valorVenda: null};
    const [produto, setProduto] = useState(produtoNovo);
    const produtoService = new ProdutoService();
    const location = useLocation();
    const { produtoAlterar } = location.state || { };

    useEffect(() => {
        if(produtoAlterar){
            setProduto(produtoAlterar);
        } else {
            setProduto(produtoNovo);
        }
    }, []);

    const alterarValor = (event) => {
        setProduto({...produto, [event.target.name]:event.target.value });
    }

    const salvar = () => {
        if(produto.id){
            produtoService.alterar(produto).then(data => {
                console.log(data);
            })
        } else {
            produtoService.inserir(produto).then(data => {
                console.log(data)
            });
        }
    }

    return (
        <div className={styles.form}>
            <h2>Inserir ou alterar produto</h2>
            <label className={styles.label}>Descricao Curta</label>
            <input className={styles.input} type="text" name="descricaoCurta" value={produto.descricaoCurta} onChange={alterarValor} />
            <label className={styles.label}>Descricao Detalhada</label>
            <input className={styles.input} type="text" name="descricaoDetalhada" value={produto.descricaoDetalhada} onChange={alterarValor} />
            <label className={styles.label}>Valor de Custo</label>
            <input className={styles.input} type="number" name="valorCusto" value={produto.valorCusto} onChange={alterarValor} />
            <label className={styles.label}>Valor de Venda</label>
            <input className={styles.input} type="number" name="valorVenda" value={produto.valorVenda} onChange={alterarValor} />
            <button onClick={salvar} className={styles.button}>Salvar</button>
        </div>
    )
}

export default ProdutoForm