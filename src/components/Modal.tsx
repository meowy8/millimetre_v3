"use client";
import React from "react";
import AddFilmNote from "./film/AddFilmNote";

const Modal = ({
  showModal,
  children,
}: {
  showModal: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center ${
        showModal ? "block" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default Modal;
