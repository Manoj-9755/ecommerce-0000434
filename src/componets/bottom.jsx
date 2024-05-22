
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"


export const Bottom = () => {
  return (
    <div>
      <div className=" w-full flex justify-between">
        <div className="w-[50%] p-5 ml-3.5">
          <h1 className=" capitalize font-bold text-4xl">
            new style for latest collection
          </h1>
        </div>
        <p className="w-[50%] font-semibold p-5 text-sm">
          Discover our latest collection of clothing,shoes, and accessories that
          are perfect for any occasion .From casual wear to formal attire, we
          have everything you need to revamp you wardrobe and stay on trend
        </p>
      </div>
      <div className="w-full h-[800px] flex justify-between ">
        <div className=" w-[50%]  p-4 ml-1">
          <img src={img1} className="rounded-lg " width={482} height={300}  />

        </div>
        <div className="p-4 w-[50%] ">
          <img src={img2} className="  rounded-lg p-1 mb-5"  />

          <img src={img3} className="rounded-lg p-1"  />
        </div>
      </div>
    </div>
  );
};
