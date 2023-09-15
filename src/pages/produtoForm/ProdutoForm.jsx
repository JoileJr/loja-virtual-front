import React, { useState, useEffect } from 'react'
import { ProdutoService } from '../../services/ProdutoService';
import styles from './ProdutoForm.module.css';

const ProdutoForm = () => {
    const produtoNovo = { descricaoCurta: '', descricaoDetalhada: '', valorCusto: 0, valorVenda:0};
    const [produto, setProduto] = useState(produtoNovo);
    const produtoService = new ProdutoService();

    const alterarValor = (event) => {
        setProduto({...produto, [event.target.name]:event.target.value });
    }

    const salvar = () => {
        produtoService.inserir(produto).then(data => {
            console.log(data)
        });
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