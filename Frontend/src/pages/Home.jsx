import { Container, Dashboard } from "../components/index";
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
    <Container>
      <Dashboard/>
    </Container>
  );
}

export default Home;
