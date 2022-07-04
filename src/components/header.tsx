import { useContext, useEffect, useState } from 'react';
import { getItemName } from '../utils/api';
import Link from 'next/link';
import { myContext } from '../context/userContext';
import Image from 'next/image';
import logoCar from '../../public/images/winebox.png';
import logoRegister from '../../public/images/conta.png';
import logoSearch from '../../public/images/Busca.png';
import style from '../styles/Header.module.css';

export default function Header() {
  const menu: string[] = ["Clube", "Loja", "Produtores", "Ofertas", "Eventos"];

  const [valueInput, setValueInput] = useState('');
  
  const { setItems, setTotalItems, car, setCar } = useContext(myContext);

  async function setItemName() {
    const { items, itemsAll } = await getItemName(valueInput);
    setItems(items);
    setTotalItems(itemsAll);
  }

  useEffect(() => {
    const keyCar = JSON.parse(localStorage.getItem('car'));
    if (keyCar) {
      setCar(keyCar);
    }
  },[]);

  return (
    <div>
      <header className={style.myHeader}>
        <img alt="Wine" src="https://img.wine.com.br/logo/wine/black/wine.svg" />
        <nav>
          <ul>
            {menu.map((element) => (<li>{element}</li>))}
          </ul>
        </nav>
        <div className={style.icons}>
          <Image 
            className={style.img}  
            src={logoSearch} alt="Search"
            onClick={() => {
              console.log(document.querySelector("#search"));
            }} 
          />
          <Image className={style.img}  src={logoRegister} alt="regiter" />
          <Link href="/car">
            <div>
              <Image 
                className={style.img}  
                src={logoCar} alt="logoCar"   
              />
            {car.length}
            </div>
          </Link>
        </div>
      </header>  
    </div>
  );
}