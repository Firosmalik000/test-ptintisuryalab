import { useState } from 'react';

const Color = () => {
  const savedcolor = localStorage.getItem('colorsaved');
  const [change, setChange] = useState(savedcolor || 'blue');
  //   const colorBox = [
  //     {
  //       warna: 'yellow',
  //     },
  //     {
  //       warna: 'red',
  //     },
  //     {
  //       warna: 'blue',
  //     },
  //   ];
  console.log({ change });

  const handleClick = (warna) => {
    setChange(warna);
    localStorage.setItem('colorsaved', warna);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5">
        <p className="text-2xl font-semibold my-3">Color Picker</p>
        <div className={`w-[300px] h-[400px] bg-${change}-500 mb-3`}></div>
        <div className="flex justify-between w-[300px] text-white">
          <button className="w-14  h-20 bg-yellow-500" onClick={() => handleClick('yellow')}>
            yellow
          </button>
          <button className="w-14  h-20 bg-blue-500" onClick={() => handleClick('blue')}>
            blue
          </button>
          <button className="w-14  h-20 bg-green-500" onClick={() => handleClick('green')}>
            green
          </button>
          <button className="w-14  h-20 bg-red-500" onClick={() => handleClick('red')}>
            red
          </button>
        </div>
      </div>
    </>
  );
};

export default Color;
