import { Container, Dashboard } from "../components/index";
import { useSelector } from "react-redux";
import { GuestHome } from "../components/index";
import AuthLayout from "../components/AuthLayout";

function Home() {
  const authStatus = useSelector((state) => state.auth.status);

  if (!authStatus) {
    return (
      <main className="bg-[#00172F]">
        <GuestHome />;
      </main>
    );
  }
  return (
    <AuthLayout authentication>
      <Dashboard />
    </AuthLayout>
  );
}

export default Home;
