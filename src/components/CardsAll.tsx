import { useContext, useEffect } from 'react';
import Card from '../components/card';
import { myContext } from '../context/userContext';
import api from '../utils/api';
import style from '../styles/Home.module.css'

export default () => {
  const { 
    items,
    setItems, 
    totalItems, 
    setTotalItems,
    setTotalPages 
  } = useContext(myContext);

  useEffect(() => {
    api().then(({ itemsAll, items, pageAll }) => {
      setItems(items);
      setTotalItems(itemsAll);
      setTotalPages(pageAll);
    });
  }, []);


  return (
  <div>
    < span>{`${totalItems} produtos encontrados`}</span>
    <section className={style.cards}>

      {items.map(({ id, image, name, priceMember, priceNonMember }) => (
        <Card
        id={id}
        image={image} 
        name={name} 
        priceMember={priceMember}
        priceNonMember={priceNonMember} 
        />
        ))} 
    </section>  
  </div>
  );
}
