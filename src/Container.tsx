import NavBar from "./NavBar";
import Content from "./Content";

const Container = () => {
  return (
    <div className="flex flex-row w-3/4 max-w-7xl">
      <NavBar />
      <Content />
    </div>
  );
};

export default Container;
