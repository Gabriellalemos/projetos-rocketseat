import itens, { cardapioItens } from "./constants";
import {
  CardContainer,
  ItensContainer,
  MainContainer,
  TitleConteiner,
} from "./styles";
import DeliveryIcon from "../../assets/Imagem.png";
import CardProduct from "../../components/CardProduct";

function Home() {
  return (
    <>
      <MainContainer>
        <div>
          <TitleConteiner>
            Encontre o café perfeito para qualquer hora do dia
          </TitleConteiner>
          <>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </>
          <ItensContainer>
            {itens.map((item) => (
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
                key={item.id}
              >
                {item.image}
                <p>{item.text}</p>
              </div>
            ))}
          </ItensContainer>
        </div>
        <img
          src={DeliveryIcon}
          alt="Delivery Icon"
          style={{ height: "360px" }}
        />
      </MainContainer>
      <h1>Nossos cafés</h1>
      <CardContainer>
        {cardapioItens.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </CardContainer>
    </>
  );
}

export default Home;
