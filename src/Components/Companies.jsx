import Image from '../assets/v1.png';
import Image1 from '../assets/v2.png';
import Image2 from '../assets/v3.png';
import Image3 from '../assets/v4.png';
import Image4 from '../assets/v5.png';

const Companies = () => {
  return (
    <div className="w-full h-[15vh] flex flex-wrap justify-evenly">
      <div className="w-[30%] max-w-[100px] mb-2">
        <img src={Image} alt="" className="w-full" />
      </div>
      <div className="w-[30%] max-w-[100px] mb-2">
        <img src={Image1} alt="" className="w-full" />
      </div>
      <div className="w-[30%] max-w-[100px] mb-2">
        <img src={Image2} alt="" className="w-full" />
      </div>
      <div className="w-[30%] max-w-[100px] mb-2">
        <img src={Image3} alt="" className="w-full" />
      </div>
      <div className="w-[30%] max-w-[100px] mb-2">
        <img src={Image4} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Companies;
