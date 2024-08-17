import { useParams } from "react-router-dom";

const Cat = () => {
  // todo  get items from db and then query according to collections
  const { category } = useParams();
  return <div>{category}</div>;
};

export default Cat;
