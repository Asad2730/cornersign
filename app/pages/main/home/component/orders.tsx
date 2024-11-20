import Image from "next/image";


const orderList = [
    {title:'Total Orders Created',percentage:2.3,count:140,profit:true},
    {title:'Delivered Orders',percentage:2.1,count:56,profit:true},
    {title:'Completed Orders',percentage:1.8,count:42,profit:false}
]

export const Orders = () =>(
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 lg:gap-4 mb-4 lg:h-[113px]">
    {orderList.map((order,index)=>(
       <div key={index} className="overflow-hidden rounded-2xl  bg-[#FFFFFF] shadow">
       <div className="px-4 py-5 sm:p-6">
         <div className="flex items-center justify-between">
           <div>
             <h3 className="text-sm font-medium text-gray-500">
                {order.title}
             </h3>
             <p className="mt-1 text-3xl font-semibold text-[#000637]">{order.count}</p>
             <div className="flex items-center mt-2 ">
               <p className={`text-sm font-medium ${order.profit?'text-[#3DD598]':'text-[#F0142F]'}`}>{order.percentage}%</p>
               <Image
                 alt="arow"
                 src={`${order.profit?'/ic-arrow-narrow-up.svg':'/ic-arrow-narrow-up-1.svg'}`}
                 height={15}
                 width={15}
                 quality={100}
               />
               <span className="ml-1 text-xs text-gray-500">than last year</span>
             </div>
           </div>
           <div className="flex-shrink-0">
             <div className="w-12 h-12 bg-[#FFFFFF] z-10 shadow-xl border  rounded-full flex items-center justify-center">
               <Image
                 alt="order"
                 src="/Group 52855.svg"
                 quality={100}
                 height={20}
                 width={20}
               />
             </div>
           </div>
         </div>
       </div>
     </div>
    ))}
 </div>
)
