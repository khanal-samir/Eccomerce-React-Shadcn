import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col flex-wrap min-h-screen ">
      <Header />
      <Outlet className="flex-grow" />
      <Footer />
    </div>
  );
};

export default App;
