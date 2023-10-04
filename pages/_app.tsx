import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import LoginModel from "../components/models/LoginModel";
import RegisterModel from "../components/models/RegisterModel";
// import Modal from "../components/Modal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Modal isOpen title="Hella" actionLabel="Submit"/> */}
      <RegisterModel/>
      <LoginModel/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
