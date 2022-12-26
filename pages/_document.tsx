import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../component/footer";
import Title from "../component/title";
import TopNavbar from "../component/top-navbar";


export default function Document() {
  return (
    <Html lang="en">
      <div className="container mb-3">
        <Head />
        <Title />
        <TopNavbar />
        <Main />
        <NextScript />
      </div>
        <Footer />
    </Html>
  );
}
