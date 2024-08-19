import { ReactElement } from "react";
import { CardProductContainer } from "./styles";

type Product = {
  id: number;
  tag: string[];
  title: string;
  subtitle: string;
  price: string;
  quantity: number;
  imageProduct: ReactElement<React.ReactNode>;
};

type CardProductProps = {
  product: Product;
};

function CardProduct({ product }: CardProductProps) {
  return (
    <CardProductContainer>
      <>{product.imageProduct}</>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
    </CardProductContainer>
  );
}

export default CardProduct;
