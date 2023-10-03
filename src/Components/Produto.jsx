// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';
import React from 'react';
import Head from './Head';

import { useFetchDocuments } from '../hooks/useFetchDocuments';

const Produto = () => {
  const { documents: produtos, loading } = useFetchDocuments('produtos');

  const { id } = useParams();

  produtos &&
    produtos.filter((produto) => {
      console.log(
        produto.title
          .toLowerCase()
          .replace(' ', '-')
          .normalize('NFD')
          .replace(/\p{Mn}/gu, '') === id,
      );
    });

  if (produtos === null) return null;

  const currentProduto = produtos.filter(
    (produto) =>
      produto.title
        .toLowerCase()
        .replace(' ', '-')
        .normalize('NFD')
        .replace(/\p{Mn}/gu, '') === id,
  );

  return (
    <>
      <Head
        title={`Coffee Shops | Tia Rosa`}
        description="Descrição dos produtos"
      />
      <div className="container">
        <section className={styles.produtoContainer}>
          {currentProduto.map((produto) => (
            <div key={produto.id} className={styles.productCard}>
              <div>
                <img src={produto.image} alt={produto.title} />
              </div>
              <div>
                <h1 className="titulo">{produto.title}</h1>
                <p>{produto.descricao}</p>
                <p>
                  R${' '}
                  {(+produto.preco.replace(',', '.'))
                    .toFixed(2)
                    .replace('.', ',')}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Produto;
