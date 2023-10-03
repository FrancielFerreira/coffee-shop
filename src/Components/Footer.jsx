import styles from './Footer.module.css';
import logo from '/logo.svg';

// social icons
import instagramIcon from '../assets/icons/ri_instagram-fill.svg';
import facebookIcon from '../assets/icons/uil_facebook.svg';
import linkedinIcon from '../assets/icons/mdi_linkedin.svg';

// contact icons
import phoneIcon from '../assets/icons/bi_telephone.svg';
import emailIcon from '../assets/icons/bi_envelope.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="Logo Tia Rosa" />
        </div>

        <div className={styles.footerContact}>
          <h2>Contato</h2>
          <div>
            <p>
              <img src={emailIcon} />
              coffeeshop.tiorosa@email.com
            </p>
            <p>
              <img src={phoneIcon} />
              (61) 9999-9999
            </p>
          </div>
        </div>
        <div className={styles.footerSocial}>
          <h2>Redes Sociais</h2>
          <div>
            <div>
              <a href="#">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBar}>
        <p>© Alguns os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
