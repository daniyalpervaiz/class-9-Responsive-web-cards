import Image from "next/image"

export default function Cards() {
    return (<div className="flex flex-col items-center leading-66 md:flex md:flex-row 
     md:w-10/12 md:ml-16 md:gap-3 md:mt-5 lg:ml-20 xl:ml-28">

        <div className="mt-4 border-2 border-gray-600 w-7/12">
            <Image src="/headphone.webp" alt="headphone" width={400} height={100} /><hr className="border-gray-600" />
            <p className="line-through text-center">Price=RS 5500/-</p>
            <p className="text-center">After Discount</p>
            <p className="text-center">Price=RS 2500/-</p>
           <div className="text-center"><button className="bg-gray-600 px-6 rounded-xl my-2 ">Buy Now</button></div> 
        </div>

        <div className="mt-4 border-2 border-gray-600 w-7/12">
            <Image src="/charger.webp" alt="charger" width={400} height={100} /><hr className="border-gray-600" />
            <p className="line-through text-center">Price=RS 2500/-</p>
            <p className="text-center">After Discount</p>
            <p className="text-center">Price=RS 1250/-</p>
            <div className="text-center"><button className="bg-gray-600 px-6 rounded-xl my-2 ">Buy Now</button></div> 
        </div>

        <div className="mt-4 border-2 border-gray-600 w-7/12">
            <Image src="/pouch.jpg" alt="pouch" width={400} height={100} /><hr className="border-gray-600" />
            <p className="line-through text-center">Price=RS 1000/-</p>
            <p className="text-center">After Discount</p>
            <p className="text-center">Price=RS 500/-</p>
            <div className="text-center"><button className="bg-gray-600 px-6 rounded-xl my-2 ">Buy Now</button></div> 
        </div>




    </div>



    )
}