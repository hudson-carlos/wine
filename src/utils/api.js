const url = "https://wine-back-test.herokuapp.com/products?"
const url2 = "https://wine-back-test.herokuapp.com/products";

let itemsAll = 0;
let pageAll = 0;

export default async function getProducts(page) {
  if (!page) page = 1; 
  const items = await fetch(`${url}page=${page}&limit=9`)
    .then(res => res.json())
    .then(({ items, totalItems, totalPages }) => items.map(item => {
      const { id, image, name, priceMember, priceNonMember } = item;
      itemsAll = totalItems;
      pageAll = totalPages;
      return {
        id, 
        image, 
        name, 
        priceMember, 
        priceNonMember
      }
    }));

  return {
    items,
    itemsAll,
    pageAll,
  } 
}

export async function getItemsPirce(price) {
  const items = await fetch(`${url}page=1&limit=9&filter=${price}`)
    .then(res => res.json())
    .then(({ items, totalItems, totalPages }) => items.map(item => {
      const { id, image, name, priceMember, priceNonMember } = item;
      itemsAll = totalItems;
      pageAll = totalPages;
      return {
        id, 
        image, 
        name, 
        priceMember, 
        priceNonMember
      }
    }));  
  return { itemsAll, items, pageAll } ;
}

export async function getItemName(nameFilter) {
  const items = await fetch(`${url2}`)
    .then(res => res.json())
    .then(({ items, totalItems }) => items.filter(({ name }) => name === nameFilter)
      .map(item => {
        const { id, image, name, priceMember, priceNonMember } = item;
        itemsAll = totalItems;
        return {
          id, 
          image, 
          name, 
          priceMember, 
          priceNonMember
        }
      })
    );
 
  return { itemsAll, items } ;
}

export async function getItemId(id) {
  const item = await fetch(`${url2}`)
    .then(res => res.json())
    .then(({ items }) => items.find(item => item.id === id)
    );
  
  return item;
}
