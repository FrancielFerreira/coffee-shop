import React from 'react';
import styles from './Produtos.module.css';
import { Link } from 'react-router-dom';
import Head from '../../Components/Head';

import { useFetchDocuments } from '../../hooks/useFetchDocuments';

const Produtos = () => {
  const { documents: produtos, loading } = useFetchDocuments('produtos');

  return (
    <>
      <Head
        title="Produtos - Coffee Shops | Tia Rosa"
        description="Descrição dos produtos"
      />
      <div className="container">
        <div className={styles.products}>
          <h1 className="titulo">Produtos</h1>
          <div className={styles.productsList}>
            {loading && <p>Carregando...</p>}
            {produtos &&
              produtos.map((produto) => (
                <div className={styles.productItem} key={produto.id}>
                  <Link
                    to={`/produto/${produto.title
                      .toLowerCase()
                      .replace(' ', '-')
                      .normalize('NFD')
                      .replace(/\p{Mn}/gu, '')}`}
                  >
                    <img src={produto.image} alt={produto.title} />
                    <h2>{produto.title}</h2>
                    <p>{produto.descricao}</p>
                  </Link>
                </div>
              ))}
          </div>
          <Link to="/" className="btn">
            Voltar para home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Produtos;
