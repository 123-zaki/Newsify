import React from "react";

export default function Error() {
  //   return (
  //     <div className='h-screen w-full flex justify-center items-center'>
  //         <div className="p-4 shadow-lg rounded-md w-[300px] h-[300px]"></div>
  //     </div>
  //   )
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="max-w-96 shadow-xl rounded-lg hover:shadow-2xl hover:rounded-br-2xl hover:rounded-tl-2xl p-4 bg-(--bg)">
            <h1 className="text-2xl font-semibold text-(--text) mb-4 select-none text-center">
          404 - Page Not Found
        </h1>
        <p className="text-(--text) select-none text-center">
          This article page does not exist, you have arrived on a wrong url
        </p>
        <h2 className="text-(--text) select-none text-lg font-semibold mt-2 text-center">
            (If you are on correct url then this page doest exist now but will come soon)
        </h2>
        </div>
      </div>
    </>
  );
}
