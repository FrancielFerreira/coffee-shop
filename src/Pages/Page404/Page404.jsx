import { Link } from 'react-router-dom';
import styles from './Page404.module.css';
import img404 from '../../assets/404.svg';
import Head from '../../Components/Head';

const Page404 = () => {
  return (
    <>
      <Head
        title="Página 404 - Coffee Shops | Tia Rosa"
        description="Descrição dos produtos"
      />
      <div className="container">
        <div className={styles.page404}>
          <img src={img404} alt="Erro 404" />
          <h1 className="titulo">404</h1>
          <p>Página não encontrada</p>
          <Link to="/" className="btn">
            Voltar para home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page404;
