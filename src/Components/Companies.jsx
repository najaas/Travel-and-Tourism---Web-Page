import Image from '../assets/v1.png'
import Image1 from '../assets/v2.png'
import Image2 from '../assets/v3.png'
import Image3 from '../assets/v4.png'
import Image4 from '../assets/v5.png'


const Companies = () => {
  return (
    <div className="w-full h-[40vh] flex flex-grow items-center justify-between ">
        <img src={Image} alt="" />
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />

    </div>
  );
};

export default Companies;
