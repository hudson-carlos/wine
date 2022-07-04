import { createContext, ReactNode, useState } from 'react';

type propsProvider = {
  children: ReactNode;
}

type objItem = {
  id: number
  image: string;
  name: string;
  priceMember: number;
  priceNonMember: number; 
}

type contextType = {
  items: objItem[] | [];
  setItems: (newItems: objItem[] | []) => void;
  totalItems: number;
  setTotalItems: (newValue: number) => void;
  totalPages: number;
  setTotalPages: (newValue: number) => void;
  car: objItem[] | [];
  setCar: (newItems: objItem[] | []) => void;
  pages: number;
  setPages: (newValue: number) => void; 
}

const initialValue = {
  items: [],
  setItems: () => {},
  totalItems: 0,
  setTotalItems: () => {},
  totalPages: 1,
  setTotalPages: () => {},
  pages: 1,
  setPages: () => {},
  car: [],
  setCar:() => {},
}

export const myContext = createContext<contextType>(initialValue);

export function Provider({ children }: propsProvider) {
  const [items, setItems] = useState(initialValue.items);
  const [totalItems, setTotalItems] = useState(initialValue.totalItems);
  const [car, setCar] = useState(initialValue.car);
  const [pages, setPages] = useState(initialValue.pages);
  const [totalPages, setTotalPages] = useState(initialValue.totalPages);


  return(
    <myContext.Provider value={{
      items,
      setItems,
      totalItems,
      setTotalItems,
      car,
      setCar,
      totalPages,
      setTotalPages,
      pages,
      setPages,
    }}>{children}</myContext.Provider>
  );
}