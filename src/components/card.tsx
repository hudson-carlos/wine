import Image from 'next/image';

type item = {
  image: string;
  name: string;
  priceMember: number;
  priceNonMember: number
}

export default function Card ({
    image, 
    name, 
    priceMember,
    priceNonMember 
  }: item) {
  return (
    <div>
    <Image src={image} />
    <samp>{name}</samp>
    <span>{priceMember}</span>
    <span>{priceNonMember}</span>
    </div>
  );
}