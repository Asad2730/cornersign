import { CustomBtn } from "@/app/common/components/customBtn";
import { CustomInput } from "@/app/common/components/customInput";
import Image from "next/image";

const imgSize = 40;

export const Chats = () => {
  return (
    <div className="flex flex-col lg:flex-row  bg-[#FFFFFF] rounded-2xl">
      <div className="lg:w-1/4 w-full border-b lg:border-b-0 lg:border-r border-gray-300 p-4">
        <h2 className="text-2xl font-semibold mb-4 text-[#1A1717]">Chat</h2>
        <div className="mb-2">
          <CustomInput
            placeHolder="search contacts..."
            type="search"
            iconSize={15}
            trailingIcon="/search.svg"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center p-2 rounded-lg bg-green-50 text-white relative">
            <Image
              alt="p"
              src={"/profile.jpeg"}
              height={imgSize}
              width={imgSize}
              className="rounded-full"
            />
            <div className="absolute bottom-2 left-8 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
            <div className="ml-2 text-[#5E99A0]">
              <p className="font-bold">Ryan Jack</p>
              <span className="text-xs">Now</span>
            </div>
          </div>

          {["Henery Daniel", "Charlie Doe", "Minnie Ava"].map((name, idx) => (
            <div
              key={idx}
              className="flex items-center p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                alt="p"
                src={"/Oval@2x.png"}
                height={imgSize}
                width={imgSize}
                className="rounded-full"
              />
              <div className="ml-2 text-[#707070]">
                <p className="font-bold ">{name}</p>
                <span className="text-xs">5 Mins ago</span>
                <p className="text-xs ">Lorem ipsum is a dummy text</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full ">
        <div className="flex items-center border-b border-gray-300 p-4 relative">
          <Image
            alt="p"
            src={"/profile.jpeg"}
            height={imgSize}
            width={imgSize}
            className="rounded-full"
          />

          <div className="flex flex-row space-x-2 items-center ml-4">
            <p className="font-bold text-lg text-[#090909]">Ryan Jack</p>
            <span className="text-xs text-[#6467EC]">(Driver)</span>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="flex justify-end mb-4">
            <div className="bg-[#5E99A0] text-white p-3 rounded-lg max-w-xs lg:max-w-md">
              <p>Hello Martin, Can you visit today?</p>
              <span className="text-xs block mt-1 text-right">09:00:40</span>
            </div>
          </div>
          <div className="flex justify-start mb-4">
            <div className="bg-white text-gray-800 border p-3 rounded-lg max-w-xs lg:max-w-md shadow">
              <p>Yes, I Can.</p>
              <span className="text-xs block mt-1">09:00:40</span>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#5E99A0] text-white p-3 rounded-lg max-w-xs lg:max-w-md">
              <p>lorem ipsum is a dummy text and dollar sit.</p>
              <span className="text-xs block mt-1 text-right">09:00:40</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-2 w-full p-2">
          <div className="w-[90%]">
            <CustomInput placeHolder="Type a message" />
          </div>
          <div className="w-[10%] ">
            <CustomBtn label="Send" iconSrc="/Send.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
