import React from "react";

export default function BgDecorator() {
  return (
    <>
      <div className="bg-red-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[5rem] dark:bg-[#946263]"></div>
      <div className="bg-slate-200 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
    </>
  );
}
