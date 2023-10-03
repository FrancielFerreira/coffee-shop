import React from 'react';
import styles from './Dashboard.module.css';

import { useFetchDocuments } from '../../hooks/useFetchDocuments';

const Dashboard = () => {
  const { documents: produtos, loading } = useFetchDocuments('produtos');

  return (
    <>
      <h1 className="titulo">Dashboard</h1>
      <ul className={styles.productListHead}>
        <li>Produto</li>
        <li>Preço</li>
      </ul>
      {loading && <p>Carregando...</p>}
      <ul className={styles.productList}>
        {produtos &&
          produtos.map((produto) => (
            <li key={produto.id}>
              <div>
                <img src={produto.image} />
                <span>{produto.title}</span>
              </div>
              <span>
                R${' '}
                {(+produto.preco.replace(',', '.'))
                  .toFixed(2)
                  .replace('.', ',')}
              </span>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Dashboard;
