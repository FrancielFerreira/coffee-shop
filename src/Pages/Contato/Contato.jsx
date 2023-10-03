import styles from './Contato.module.css';

import contactImg from '../../assets/map.png';
import Head from '../../Components/Head';

const Contato = () => {
  return (
    <>
      <Head
        title="Contato - Coffee Shops | Tia Rosa"
        description="Descrição dos produtos"
      />
      <div className="container">
        <div className={styles.contato}>
          <div>
            <h1>Fale Conosco</h1>
            <p>
              <b>Email:</b>
              <br />
              coffeeshop.tiarosa@email.com
            </p>
            <p>
              <b>Telefone:</b>
              <br />
              (61) 9999-9999
            </p>
            <p>
              <b>Endereço:</b>
              <br />
              Rua X, número Y, Bairro
              <br />
              Braília - DF
              <br />
              CEP: 71000-000
            </p>
            <p>
              <b>Horário de funcionamento: </b>
              <br />
              De segunda a sexta, das 8h às 18h
              <br />
              Sábado, das 9h às 17h
              <br />
              Domingo, das 9h às 16h
            </p>
          </div>
          <div>
            <img src={contactImg} alt="Coando café" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;
