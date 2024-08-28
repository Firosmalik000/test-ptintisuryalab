import { useState } from 'react';

const Rotate = () => {
  const rotasiSaved = localStorage.getItem('rotasiitem');
  const [rotateItem, setRotateItem] = useState(rotasiSaved || '');

  const handleRotateClick = (rotasi) => {
    setRotateItem(rotasi);
    localStorage.setItem('rotasiitem', rotasi);
  };

  //   useEffect(() => {
  //     if (rotateItem === '90') {
  //       setRotateItem('180');
  //     } else if (rotateItem === '180') {
  //       setRotateItem('270');
  //     }
  //   }, []);
  console.log(rotasiSaved);
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xl font-bold ">Rotate Item</p>
      <div className="flex gap-x-5">
        <p className={`text-center text-xl font-semibold rotate-[${rotateItem}deg]`}>PT Inti Surya Laboratorium</p>
        <div className="flex flex-col gap-1 border ">
          <button onClick={() => handleRotateClick('-90')}>Rotate 90</button>
          <button onClick={() => handleRotateClick('-180')}>Rotate 180</button>
          <button onClick={() => handleRotateClick('90')}>Rotate 270</button>
          <button onClick={() => handleRotateClick('')}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default Rotate;
