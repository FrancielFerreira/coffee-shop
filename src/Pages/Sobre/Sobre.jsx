import styles from './Sobre.module.css';
import cafeteria from '../../assets/ambiente.jpg';
import Head from '../../Components/Head';

const Sobre = () => {
  return (
    <>
      <Head
        title="Sobre - Coffee Shops | Tia Rosa"
        description="Descrição da sobre"
      />
      <div className="container">
        <div className={styles.sobre}>
          <h1 className="titulo">Sobre</h1>
          <div>
            <div>
              <p>
                No Tia Rosa, nós acreditamos que o café é mais do que uma
                bebida. É uma experiência que pode nos conectar com as pessoas
                que amamos e com as nossas memórias.
              </p>
              <p>
                É por isso que nós preparamos o nosso café com tanto carinho e
                dedicação. Queremos que você possa aproveitar cada gole e
                reviver os bons momentos da sua vida.
              </p>
              <p>
                <b>Venha tomar um café com a gente!</b>
              </p>
            </div>
            <div>
              <img src={cafeteria} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;
