import { useContext } from "react";
import { myContext } from "../context/userContext";
import Layout from "../components/layoutHome";
import CardsCar from "../components/cardsCar";

export default function Car() {
  return (
    <CardsCar />
  );
} 