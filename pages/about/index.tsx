import { Inter } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import TopNavBar from "../../component/top-navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <TopNavBar/>
    </>
  );
}
