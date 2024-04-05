import { Container } from "../components/index";
import { useSelector } from "react-redux";
import { GuestHome } from "../components/index";

function Home() {
  const authStatus = useSelector((state) => state.auth.status);

  if (!authStatus) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <GuestHome />
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8 ">
      <div className=" min-h-full flex flex-wrap items-center justify-center">
        <h1 className="text-4xl">Welcome Hariom!!!</h1>
      </div>
    </div>
  );
}

export default Home;
