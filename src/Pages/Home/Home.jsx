import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import CoffeeAbout from '../../assets/coffee-about.jpg';
import Produtos from '../Produtos/Produtos';
import Head from '../../Components/Head';

const Home = () => {
  return (
    <>
      <Head
        title="Coffee Shops | Tia Rosa"
        description="Descrição dos produtos"
      />
      <main className={styles.hero}>
        <div className="container">
          <h1 className="titulo">Porquê café sempre é uma boa ideia!</h1>
          <Link className="btn" to="/produtos">
            Saiba Mais
          </Link>
        </div>
      </main>

      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h1 className="titulo">Sobre</h1>
          <p>
            O café da Tia Rosa é feito com amor e carinho, assim como o da vovó.
            Utilizamos apenas grãos de café selecionados, torrados na hora, para
            garantir o melhor sabor e aroma.
          </p>

          <p>
            <b>Confira nossos produtos abaixo</b>
          </p>
          <Link className="btn-alt" to="/produtos">
            Saiba Mais
          </Link>
        </div>
        <div>
          <img src={CoffeeAbout} alt="maquina de moer café" />
        </div>
      </section>

      <section className={styles.productsHome}>
        <Produtos />
      </section>

      <section className={styles.testimonials}>
        <div className="container">
          <h1 className="titulo">Depoimentos</h1>
          <div className={styles.testimonialsList}>
            <div className={styles.testimonialItem}>
              <p>
                O café da Tia Rosa é perfeito para um momento de relaxamento. É
                como se o tempo parasse quando estou aqui.
              </p>
              <div className={styles.testimonialStar}></div>
              <h2>
                Maria <span>Cliente</span>
              </h2>
            </div>
            <div className={styles.testimonialItem}>
              <p>
                O café da Tia Rosa é perfeito para um momento de relaxamento. É
                como se o tempo parasse quando estou aqui.
              </p>
              <div className={styles.testimonialStar}></div>
              <h2>
                Maria <span>Cliente</span>
              </h2>
            </div>
            <div className={styles.testimonialItem}>
              <p>
                O café da Tia Rosa é perfeito para um momento de relaxamento. É
                como se o tempo parasse quando estou aqui.
              </p>
              <div className={styles.testimonialStar}></div>
              <h2>
                Maria <span>Cliente</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
