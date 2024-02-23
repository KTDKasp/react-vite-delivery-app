import React, { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { Products } from '../../interfaces/product.interface';

export const Product: React.FC = () => {
  const data = useLoaderData() as {data: Products};

  return (
    <Suspense fallback={<>Загрузка...</>}>
      <Await resolve={data.data}>
      {({data}: {data: Products}) => (
        <div>Product - {data.name} + api: https://purpleschool.ru/pizza-api-demo/[postfix]</div>
      )}
    </Await>
    </Suspense>
  );
};
