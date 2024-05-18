import React from "react";

const FilmDescription = () => {
  return (
    <div className="flex flex-col gap-2 my-8">
      <h1 className="outfit text-3xl">Millennium Mambo</h1>
      <div className="flex justify-between karla">
        <span>2001</span>
        <span>1 hr 46 min</span>
      </div>
      <hr />
      <p className="karla">
        The youthful Vicky is torn between two men, Hao-Hao and Jack. At night
        she works as a PR person at a night club to support both of them.
        Hao-Hao keeps vigilance over her all the time, no matter she is on or
        off the job. He checks her charge accounts, telephone bills, mobile
        phone records, and even her body odor in an attempt to trace
        Vicky&apos;s activities. She cannot stand him any longer; she runs away.
      </p>
    </div>
  );
};

export default FilmDescription;
