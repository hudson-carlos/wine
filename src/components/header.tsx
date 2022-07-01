import Image from 'next/image';
import style from './Header.module.css';
import logoCar from '../../public/images/winebox.png';
import logoRegister from '../../public/images/conta.png';
import logoSearch from '../../public/images/Busca.png';


export default function Header() {
  const menu: string[] = ["Clube", "Loja", "Produtores", "Ofertas", "Eventos"];

  return (
    <header className={style.myHeader}>
      <img alt="Wine" src="https://img.wine.com.br/logo/wine/black/wine.svg" />
      <nav>
        <ul>
          {menu.map((element) => (<li>{element}</li>))}
        </ul>
      </nav>
      <div className={style.icons}>
        <Image className={style.img}  src={logoSearch} alt="Search" />
        <Image className={style.img}  src={logoRegister} alt="regiter" />
        <Image className={style.img}  src={logoCar} alt="logoCar" />
      </div>
    </header>  
  );
}