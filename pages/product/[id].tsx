import { useRouter } from "next/router";
import Link from "next/link";

import { getProductById } from "../../src/fake-data";
import ProductCard from "../../src/components/product-card";
import { PageTitle, ProductContainer, BackLink } from "./[id].style";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <></>;

  const product = getProductById(id as string);

  return (
    <>
      <PageTitle>商品詳細頁面</PageTitle>
      <BackLink>
        <Link href="/products">回產品列表</Link>
      </BackLink>
      <ProductContainer>
        <ProductCard product={product} all />
      </ProductContainer>
    </>
  );
};

export default Product;