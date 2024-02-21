import React from 'react';
import { useParams } from 'react-router-dom';

export const Product: React.FC = () => {
  const { id } = useParams();

  return (
    <div>Product - {id} + api: https://purpleschool.ru/pizza-api-demo/[postfix]</div>
  );
};
