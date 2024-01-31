import React from 'react';

export default function Closer() {
  return (
    <div className="flex h-screen w-screen snap-center items-center justify-center p-10 font-fancy text-[#e45452]">
      <div className="w-fit">
        <p className="mb-6 w-64 text-3xl font-semibold md:w-96">
          When I was writing this site, only God and I understood what I did.
          After the last p tag below, only God knows.
        </p>
        <p id="end-screen" className="text-lg font-medium">
          - John Doe
        </p>
      </div>
    </div>
  );
}
