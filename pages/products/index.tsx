import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { PageTitle, PriceFilter, ProductGallery } from './index.style';
import ProductCard from '../../src/components/product-card';
import { sortByPrice, Direction } from '../../src/fake-data';

const Home = () => {
  const [direction, setDirection] = useState<Direction>('ASC');
  const router = useRouter();

  const products = sortByPrice(direction);

  const handleSortingDirectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const dir = e.target.value;
    router.push(`${router.pathname}?direction=${dir}`, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    if (router.query.direction) {
      setDirection(router.query.direction as Direction);
    }
  }, [router.query.direction]);

  return (
    <>
      <PageTitle>商品列表</PageTitle>
      <PriceFilter>
        Price:
        <select value={direction} onChange={handleSortingDirectionChange}>
          <option value='ASC'>價格由低到高</option>
          <option value='DES'>價格由高到低</option>
        </select>
      </PriceFilter>
      <ProductGallery>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGallery>
    </>
  );
};

export default Home;
