import img from '../assets/shoe.jpeg'
export const Center = () => {
  return (
    <div>
      <div className="flex justify-between w-full p-5 m-2  h-[500px] ">
        <div className="w-[40%]   ">
            <h1 className="text-5xl capitalize font-bold font-sans p-2">trendy shoes to luxury</h1>
            <p className="text-md font-semibold p-2 mb-2 ">find yout shoes has never easier .Browser the best selection of famous fashion brands that suit your style and preferences</p>
            <button className=" m-1 w-[100px] h-[50px] capitalize rounded-3xl font-serif s border-none bg-black text-white text-md">check now</button>
            <div className="flex p-2 mt-8">
                <div className="m-0">
                    <h1 className="font-bold text-4xl">80+</h1>
                    <p className="text-xs font-semibold">unique style</p>
                </div>
                <div className="ml-4">
                    <h1 className="font-bold text-4xl">25+</h1>
                    <p className="text-xs font-semibold">  brand trusted</p>
                </div>
            </div>
            <div className='flex flex-col ml-2 mt-3'>
                <img src='/src/assets/icons8-mastercard-48.png' alt='img' width={20} height={20}/>
                <h5 className='space-x-6 mt-2'>Best Shoe Discount <b>30% OFF</b> all Shoes </h5>
            </div>
        </div>
        <div className="w-[40%] p-3 mb-20  ">
            <img className=' ' src={img} width={340}  />
        </div>
      </div>
    </div>
  );
};
