import { useParams } from "react-router-dom";

const Coll = () => {
  const { collection } = useParams();
  // todo  get items from db and then query according to collections
  return <div>{collection}</div>;
};

export default Coll;
