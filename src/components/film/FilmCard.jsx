import Image from "next/image";
import Link from "next/link";
import React from "react";

const FilmCard = () => {
  return (
    <Link href={"/filmdetail"} className="hover:bg-black/20">
      <div className="relative bg-[#01442C] w-[390px] h-[224px] rounded-lg shadow-lg -z-10 hover:opacity-90">
        <div className="bg-black w-full h-[20%] absolute bottom-0 blur-lg"></div>
        <div className="absolute bottom-5 left-5 flex items-end gap-4 outfit">
          <span className="text-2xl">Salomé</span>
          <span className="text-lg">1976</span>
        </div>
        <Image
          src="/images/filmCardBackdrop.webp"
          alt="film card"
          width={390}
          height={224}
          className="object-cover w-full h-full"
        />
      </div>
    </Link>
  );
};

export default FilmCard;
