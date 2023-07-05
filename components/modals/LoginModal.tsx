"use client";

import React, { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "../../hooks/useRegisterModal";
import useLoginModal from "../../hooks/useLoginModal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Switch to register modal to login modal
  const openRegisterDialog = useCallback(() => {

    registerModal.handleOpen();
    loginModal.handleClose();
  }, [loginModal, registerModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      // TODO ADD LOG IN

      loginModal.handleClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <span>Dont have an account?</span>
        <button
          onClick={openRegisterDialog}
          className="text-white cursor-pointer underline"
        >
          Sign Up
        </button>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Log In"
      actionLabel="Sign In"
      onClose={loginModal.handleClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
