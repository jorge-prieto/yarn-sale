import React from "react";
import { useGetProducts } from "../../hooks/useGetProducts";
import { ProductItem } from "../../components/product-item/ProductItem";
import "./ProductList.css";

const API = 'https://api.escuelajs.co/api/v1/products';

export const ProductList = () => {
  const products = useGetProducts(API)
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(product => 
          <ProductItem product={product} key={product.id} />
        )}
      </div>
    </section>
  );
};
