import AdressForm from "./DeliveryForm";
import { MainContainer, TitleConteiner } from "./styles";

function History() {
  return (
    <MainContainer>
      <span>
        <TitleConteiner>Complete seu pedido</TitleConteiner>
        <AdressForm />
      </span>
      <span>
        <TitleConteiner>Cafés selecionados</TitleConteiner>
      </span>
    </MainContainer>
  );
}

export default History;
