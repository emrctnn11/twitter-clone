import "@/styles/globals.css";

import Modal from "../components/Modal";
import Test from "@/components/Test";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";

import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <Test>
        <Component {...pageProps} />
      </Test>
    </SessionProvider>
  );
}
