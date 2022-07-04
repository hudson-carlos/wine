import { useEffect, useState } from 'react';

export default function CardsCAr () {
  const [car, setCar] = useState([]);

  useEffect(() => {
    const keyCar = JSON.parse(localStorage.getItem('car'));
    if (keyCar) {
      setCar(keyCar);
    }
  },[]);

  function removeItemCar(id) {
    const newListCar = car.filter(item => item.id !== id);
    setCar(newListCar);
    localStorage.setItem("car", JSON.stringify(newListCar))    
  }

  if (car.length === 0) return <h1>Carinho Vázio</h1>;
  return (
    <div>
      {car.map(({ id, image, name, priceMember }) => (
        <div>
          <img src={image} alt={name} />
          <span>{name}</span>
          <span>{priceMember}</span>
          <button onClick={() => removeItemCar(id)}>X</button>
        </div>
      ))}
    </div>
  );
}