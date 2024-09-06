import{Link} from "react-router-dom";
import styles from './Header.module.css'

function Header() {
  return (
    <header>
      <h1 className={styles.titulo}
      style={
        {
          backgroundColor: "yellow"
        }
      }
      >Meu site</h1>
      <nav>
            <ul>
              <li><Link to = "/">Home</Link></li>
              <li><Link to = "/sobre">Sobre</Link></li>
              <li><Link to = "/servicos">Serviços</Link></li>
              <li><Link to = "/contatos">Contato</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
