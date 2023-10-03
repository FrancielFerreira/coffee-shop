// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';
import React from 'react';
import Head from './Head';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setProduto(json);
      } catch (err) {
        setError(`Occoreu um erro: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`/dados.json`);
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  const currentProduto = produto.filter((item) => item.id === id);
  console.log(currentProduto[0].nome);

  return (
    <>
      <Head
        title={`${currentProduto[0].nome} - Coffee Shops | Tia Rosa`}
        description="Descrição dos produtos"
      />
      <div className="container">
        <section className={styles.produtoContainer}>
          {currentProduto.map((item) => (
            <div key={item.id} className={styles.productCard}>
              <div>
                <img src={item.img} alt={item.nome} />
              </div>
              <div>
                <h1>{item.nome}</h1>
                <p>{item.descricao}</p>
                <p>R$ {(+item.preco).toFixed(2).replace('.', ',')}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Produto;
