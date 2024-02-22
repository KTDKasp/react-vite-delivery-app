import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Products } from '../../interfaces/product.interface';

export const Product: React.FC = () => {
  const data = useLoaderData() as Products;

  return (
    <div>Product - {data.name} + api: https://purpleschool.ru/pizza-api-demo/[postfix]</div>
  );
};
