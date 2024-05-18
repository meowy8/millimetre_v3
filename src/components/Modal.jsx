"use client";
import React from "react";
import AddFilmNote from "./AddFilmNote";

const Modal = ({ showModal, toggleModal }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center ${
        showModal ? "block" : "hidden"
      }`}
    >
      <AddFilmNote toggleModal={toggleModal} />
    </div>
  );
};

export default Modal;
