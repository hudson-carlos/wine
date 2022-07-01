const url: string = "https://wine-back-test.herokuapp.com/products?page=1&limit=9"

interface items {
  id: number
  image: string
  name: string
  price: number,
  discount: number,
  priceMember: number,
  priceNonMember: number,
  type: string,
  classification: string,
  volume: string,
  Rating: number,
  rating: number,
  country: string,
  region: string,
  flag: string
  sommelierComment: string
}

export default async function getProducts(): Promise<items[]> {
  const items = await fetch(url)
    .then(res => res.json())
    .then(({ items }) => items);

  return items;
}