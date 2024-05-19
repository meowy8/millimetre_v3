import React from "react";
import Image from "next/image";
import CloseModalBtn from "../CloseModalBtn";

const AddFilmNote = ({ toggleModal }) => {
  const [enableDate, setEnableDate] = React.useState(false);
  const handleChange = () => {
    setEnableDate(!enableDate);
  };
  return (
    <div className="bg-[#001F24] w-full p-4 m-2 border border-[#137150] rounded-lg flex flex-col justify-center items-center gap-4">
      <div className="flex gap-4">
        <div className="w-[100px] h-[150px]">
          <Image
            src={"/images/filmDetailPoster.jpg"}
            alt="film backdrop"
            width={100}
            height={150}
            className="rounded-md object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="outfit text-2xl line-clamp-1">
              Millennium Mambo
            </span>
            <CloseModalBtn toggleModal={toggleModal} />
          </div>
          <label htmlFor="note" className="flex flex-col karla">
            Note
            <textarea
              name="note"
              id="note"
              cols="30"
              rows={5}
              className="bg-white/10 p-2 rounded-lg border hover:bg-white/20 focus:bg-white/30"
              placeholder="Add a note"
            />
          </label>
        </div>
      </div>
      <div className="flex justify-between w-full px-4">
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="datecheck"
            id="datecheck"
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            id="date"
            className={`rounded-md bg-white/20 border p-2 ${
              enableDate ? "opacity-100" : "opacity-30"
            }`}
            disabled={!enableDate}
          />
        </div>
        <div>
          <button className="bg-[#01442C] rounded-md border border-[#137150] px-4 py-2 karla hover:bg-[#137150]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFilmNote;
