import Link from 'next/link';
import { useContext } from 'react';
import { myContext } from '../context/userContext';
import style from '../styles/Card.module.css';

type item = {
  id: number;
  image: string;
  name: string;
  priceMember: number;
  priceNonMember: number
}

export default function Card ({
    id,
    image, 
    name, 
    priceMember,
    priceNonMember 
  }: item) {

  const { items, car, setCar } = useContext(myContext);  

  function addLocalStorage( ){
    const item = items.find(item => item.id === id);
    setCar([...car, item])
    localStorage.setItem("car", JSON.stringify([...car, item]));
  }

  return (
    <div className={style.superCard}>
      <Link href={`/${id}`}>
        <div className={style.card}>
          <div className={style.image}>
            <img src={image} />
          </div>
          <samp className={style.name}>{name}</samp>
          <span className={style.partner}>
          {/* texto sócio */}
          <span className={style.textPartner}>Sócio wine</span>
          {/* texto $ */}
          <span className={style.real}>R$</span>
          {/* Preço para sócio */}
          <span className={style.pricePartner}>{priceMember}</span>
          </span>
          <span className={style.notPartner}>Não Sócio R$ {priceNonMember}</span>
        </div>
      </Link>
      <button 
        className={style.add} 
        onClick={addLocalStorage}
      >ADICIONAR</button>
    </div>
  );
}