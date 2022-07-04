import { useContext, useState } from "react";
import { myContext } from "../context/userContext";
import getProducts from "../utils/api";

export default function Pagination() {
  const { totalPages, setItems, pages, setPages } = useContext(myContext);

  async function next() {
    if(pages < totalPages) {
      const { items } = await getProducts(pages + 1);
      setItems(items);
      setPages(pages + 1);
    }
  }

  async function goBack() {
    const firtPage = 1;
    if(pages > firtPage) {
      const { items } = await getProducts(pages - 1);
      setItems(items);
      setPages(pages - 1);
    }
  }

  async function lastPage() {
    if(pages < totalPages) {
      const { items } = await getProducts(totalPages);
      setItems(items);
      setPages(totalPages);
    }
  }

  async function firtPage() {
    const firtPage = 1;
    if(pages > firtPage) {
      const { items } = await getProducts(firtPage);
      setItems(items);
      setPages(firtPage);
    }
  }

  return (
    <div>
      <button onClick={firtPage}>Primeira Pagina</button>
      <button onClick={goBack}>Voltar</button>
      <button>{pages}</button>
      <button onClick={next}>Próximo</button>
      <button onClick={lastPage}>Útima Pagina</button>
    </div>
  );
}