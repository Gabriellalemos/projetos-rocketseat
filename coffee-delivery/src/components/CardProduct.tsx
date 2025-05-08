import { ReactElement, useState } from "react";

import CardButtonFooter from "../assets/images/CardFooterButton.svg";

import {
  CardProductContainer,
  CardProductImage,
  CardProductSubtitle,
  CardProductTag,
  CardProductTitle,
  CounterButton,
  CounterConteiner,
  CounterValue,
  FooterContainer,
  PriceWrapper,
  TagContainer,
} from "./styles";
import { decrement, increment } from "./functions";
import { useShoppingCart } from "../contexts/useShoppingCart";

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
  const [count, setCount] = useState(0);
  const { shoppingCount } = useShoppingCart();
  console.log(shoppingCount);
  return (
    <>
      <CardProductContainer>
        <CardProductImage>{product.imageProduct}</CardProductImage>
        <TagContainer>
          {product.tag.map((tag) => (
            <CardProductTag>{tag.toUpperCase()}</CardProductTag>
          ))}
        </TagContainer>
        <CardProductTitle>{product.title}</CardProductTitle>
        <CardProductSubtitle>{product.subtitle}</CardProductSubtitle>
        <FooterContainer>
          <PriceWrapper>{product.price}</PriceWrapper>
          <CounterConteiner>
            <CounterButton
              onClick={() => {
                decrement(count, setCount);
              }}
            >
              -
            </CounterButton>
            <CounterValue
              onClick={() => {
                decrement(count, setCount);
              }}
            >
              {count}
            </CounterValue>
            <CounterButton
              onClick={() => {
                increment(count, setCount);
              }}
            >
              +
            </CounterButton>
          </CounterConteiner>
          <button style={{ textDecoration: "none", border: "none" }}>
            <img src={CardButtonFooter} alt="" />
          </button>
          {shoppingCount}
        </FooterContainer>
      </CardProductContainer>
    </>
  );
}

export default CardProduct;
