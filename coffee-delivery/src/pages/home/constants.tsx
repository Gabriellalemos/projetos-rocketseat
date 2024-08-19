import CardIcon from "../../assets/CardIcon.svg";
import TimerIcon from "../../assets/TimerIcon.svg";
import PackageIcon from "../../assets/PackageIcon.png";
import CoffeeIcon from "../../assets/CoffeIcon.png";
import ExpressoTradicioanal from "../../assets/images/expresso_tradicional.png";
import ExpressoAmericano from "../../assets/images/expresso_americano.png";
export const itens = [
  {
    id: 1,
    text: "Compra simples e segura",
    image: <img src={CardIcon} alt="Card Icon" />,
  },
  {
    id: 2,
    text: "Entrega rápida e rastreada",
    image: <img src={PackageIcon} alt="Package Icon" />,
  },
  {
    id: 3,
    text: "Entrega rápida e rastreada",
    image: <img src={TimerIcon} alt="Timer Icon" />,
  },
  {
    id: 4,
    text: "O café chega fresquinho até você",
    image: <img src={CoffeeIcon} alt="Coffee Icon" />,
  },
];

export const cardapioItens = [
  {
    id: 1,
    tag: ["tradicional"],
    title: "Expresso Tradicional",
    subtitle: "O tradicional café feito com água quente e grãos moídos",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoTradicioanal} alt="Coffee Icon" />,
  },
  {
    id: 2,
    tag: ["tradicional"],
    title: "Expresso Americano",
    subtitle: "Expresso diluído, menos intenso que o tradicional",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoAmericano} alt="Coffee Icon" />,
  },
  {
    id: 3,
    tag: ["tradicional"],
    title: "Expresso Cremoso",
    subtitle: "Café expresso tradicional com espuma cremosa",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoAmericano} alt="Coffee Icon" />,
  },
  {
    id: 4,
    tag: ["tradicional", "gelado"],
    title: "Expresso Gelado",
    subtitle: "Bebida preparada com café expresso e cubos de gelo",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoAmericano} alt="Coffee Icon" />,
  },
  {
    id: 5,
    tag: ["tradicional", "com leite"],
    title: "Café com Leite",
    subtitle: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoAmericano} alt="Coffee Icon" />,
  },
  {
    id: 6,
    tag: ["tradicional", "com leite"],
    title: "Latte",
    subtitle: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoAmericano} alt="Coffee Icon" />,
  },
  {
    id: 7,
    tag: ["tradicional", "com leite"],
    title: "Capuccino",
    subtitle: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoAmericano} alt="Coffee Icon" />,
  },
  {
    id: 8,
    tag: ["tradicional", "com leite"],
    title: "Macchiato",
    subtitle: "Café expresso misturado com um pouco de leite quente e espuma",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoAmericano} alt="Coffee Icon" />,
  },
  {
    id: 9,
    tag: ["especial", "com leite"],
    title: "Mocaccino",
    subtitle: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoAmericano} alt="Coffee Icon" />,
  },
  {
    id: 10,
    tag: ["especial", "com leite"],
    title: "Chocolate Quente",
    subtitle: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoAmericano} alt="Coffee Icon" />,
  },
  {
    id: 11,
    tag: ["especial", "alcoólico", "gelado"],
    title: "Cubano",
    subtitle: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoAmericano} alt="Coffee Icon" />,
  },
  {
    id: 12,
    tag: ["especial"],
    title: "Havaiano",
    subtitle: "Bebida adocicada preparada com café e leite de coco",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoAmericano} alt="Coffee Icon" />,
  },
  {
    id: 13,
    tag: ["especial"],
    title: "Árabe",
    subtitle: "Bebida preparada com grãos de café árabe e especiarias",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoAmericano} alt="Coffee Icon" />,
  },
  {
    id: 14,
    tag: ["especial", "alcoólico"],
    title: "Irlandês",
    subtitle: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: "R$ 9,90",
    quantity: 1,
    imageProduct: <img src={ExpressoAmericano} alt="Coffee Icon" />,
  },
];

export default itens;
