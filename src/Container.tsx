import NavBar from "./NavBar";
import Content from "./Content";

const Container = () => {
  return (
    <div className="flex flex-row w-3/4">
      <NavBar />
      <Content />
    </div>
  );
};

export default Container;
