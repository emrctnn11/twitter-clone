"use client";

import React, { useCallback, useState } from "react";
import useLoginModal from "../../hooks/useLoginModal";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "../../hooks/useRegisterModal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Switch to register modal to login modal

  const openLoginDialog = useCallback(() => {
    loginModal.handleOpen();
    registerModal.handleClose();
  }, [loginModal, registerModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      // TODO ADD AN REGISTER AND LOG IN

      registerModal.handleClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
        value={username}
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
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an account?
        {/* Changed span to button and added some styling */}
        <button
          onClick={() => openLoginDialog()}
          className="text-white cursor-pointer hover:underline bg-transparent border-none outline-none"
          role="button"
        >
          {" "}
          Sign-in
        </button>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModal.handleClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
