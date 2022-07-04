import { getItemsPirce } from '../utils/api';
import style from '../styles/Filter.module.css';
import { useContext } from 'react';
import { myContext } from '../context/userContext';


export default function Filter() {
  type objFilter = {
    name: string;
    value: string;
  };

  const prices: objFilter[] = [{
    name: "Até R$40",
    value: "0-40"
  },
  {
    name: "R$40 A R$60",
    value: "40-60"
  },
  {
    name: "R$100 A R$200",
    value: "100-200"
  },
  {
    name: "R$200 A R$500",
    value: "200-500"
  },
  {
    name: "Acima de 500",
    value: "500-999999"
  }];

  const {setItems, setTotalItems, setTotalPages, setPages} = useContext(myContext);

  async function setItemsPrice(value: string) {
    const { items, itemsAll, pageAll } = await getItemsPirce(value);
    setItems(items);
    setTotalItems(itemsAll);
    setTotalPages(pageAll)
    const firtPage = 1;
    setPages(firtPage);
    console.log(items);
    console.log(value);
    
    
  }

  return(
    <div className={style.filter}>
      <h4>Refine sua busca</h4>
      <span>Por preço</span>
      {prices.map(({ name, value }) => (
        <label>
          <input 
            type="radio" 
            value={value} 
            name="price"
            onClick={(e) => {
              setItemsPrice(e.currentTarget.value);
            }} 
          />
          {name}
        </label>
      ))}
    </div>
  );
}