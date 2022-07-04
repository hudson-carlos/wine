import {useEffect, useState, useRef, useContext } from 'react';
import Layout from '../components/layoutHome';
import api from '../utils/api'
import Filter from '../components/filter';
import CardsAll from '../components/CardsAll';
import Pagination from '../components/pagination';
import style from '../styles/Home.module.css'; 

export default function Home() {
  return (
    <Layout>
      <div className={style.home}>
        <Filter />       
        <CardsAll />               
      </div>  
      <Pagination />
    </Layout>
  );
}
