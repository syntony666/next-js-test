import { Inter } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import TopNavBar from "../component/top-navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const title = "Laiko Studio";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
    </>
  );
}
