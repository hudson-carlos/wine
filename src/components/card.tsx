import Image from 'next/image';

type propsCard = {
  image: string;
  name: string;
  price: number;
}

export default function Card ({image, name, price }: propsCard) {
  return (
    <div>
    <Image src={image} />
    <h3>{name}</h3>
    <span>{price}</span>
    </div>
  );
}