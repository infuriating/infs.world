import React from "react";

export default function Tag({ number }: { number: number }) {
  return (
    <>
      <div className="absolute -left-[4.25rem] hidden text-6xl font-medium text-fuchsia-600 opacity-70 blur-xl md:block">
        #
      </div>
      <div className="absolute -left-[4.25rem] hidden bg-gradient-to-r from-fuchsia-700 to-transparent bg-clip-text text-6xl font-medium text-transparent md:block">
        #
      </div>
      <div className="absolute -left-12 top-3 hidden text-3xl font-medium opacity-90 blur-xl md:block">
        {number}
      </div>
      <div className="absolute -left-12 top-3 hidden text-3xl font-medium md:block">
        {number}
      </div>
    </>
  );
}
