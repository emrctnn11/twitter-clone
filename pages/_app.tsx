import "@/styles/globals.css";
import Modal from "../components/Modal";
import Test from '@/components/Test'
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Test>
        <Component {...pageProps} />
      </Test>
    </>
  );
}
