import React from "react";

const CreditsList = ({ showDetails }) => {
  return (
    <div className={` flex-col gap-2 mt-2 ${showDetails ? "flex" : "hidden"}`}>
      <div className="flex justify-between">
        <span>Vicky</span>
        <span className="font-bold">Shu Qi</span>
      </div>
      <div className="flex justify-between">
        <span>Jack</span>
        <span className="font-bold">Jack Kao</span>
      </div>
      <div className="flex justify-between">
        <span>Hao-Hao</span>
        <span className="font-bold">Duan Chun-hao</span>
      </div>
    </div>
  );
};

export default CreditsList;
