import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/layoutHome";
import { getItemId } from "../utils/api";
import style from '../styles/deteil/Home.module.css';
import Link from "next/link";

export default function DetailItem(props) {
  const router = useRouter()
  const { id } = router.query

  const [item, setItem] = useState({});

  useEffect(() => {
    getItemId(Number(id)).then(res => setItem(res));
  },[]);
  
  const { 
    image, 
    name, 
    country, 
    classification, 
    type, 
    region, 
    size, 
    flag,
    priceMember,
    priceNonMember,
    sommelierComment, 
  } = item;
  return (
    <Layout>

      <div className={style.Home}>
        <div>
          <Link href="/">
            <button>Voltar</button>
          </Link>
          <img src={image} alt={name} />
        </div>
        <div>
          <h2>{name}</h2>
          <div className={style.subIcon}>
            <div className={style.icon}>
              <img src={flag} alt={country} />
            </div>
            <span>{`${country}/${region} ${type} ${classification} ${size}`}</span>
          </div>
          <div className={style.price}>
            <div className={style.preceMembre}>
              <h3>R$</h3>
              <h2>{priceMember}</h2>
            </div>
            <h3>{`NÃO SÓCIO R$ ${priceNonMember}/UN`}</h3>
          </div>
          <div className={style.commit}>
            <span>Comentário do Sommelier</span>
            <p>{sommelierComment}</p>
          </div>
          <div>
            <button>-</button>
            <button>1</button>
            <button>+</button>
            <button>Adicionar</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}