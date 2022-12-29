import Image from 'next/image';
import Link from 'next/link';

import { Product as ProductType } from '../../fake-data';
import { Product, ImageWrapper, ProductDetail, ProductTitle, ProductDescription, ProductPrice } from './index.stye';

interface ProductCardProps {
  product: ProductType;
  all?: boolean;
}

const ProductCard = (props: ProductCardProps) => {
  const { product, all } = props;
  const { id, image, title, description, price } = product;
  return (
    <Product key={id}>
      <ImageWrapper>
        <Image src={image} alt='product' layout='fill' objectFit='cover' />
      </ImageWrapper>
      <ProductDetail>
        <ProductTitle>
          <Link href={`/product/${id}`}>{title}</Link>
        </ProductTitle>
        <ProductDescription $all={all}>{description}</ProductDescription>
        <ProductPrice>${price}</ProductPrice>
      </ProductDetail>
    </Product>
  );
};

export default ProductCard;
