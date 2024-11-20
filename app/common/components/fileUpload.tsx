import Image from "next/image";

interface IFileUpload {
  placeHolder?: string;
}

export const FileUpload = ({ placeHolder }: IFileUpload) => (
  <div className="flex items-center w-full border border-[#CCCCCC]  rounded-md overflow-hidden">
    <label className="flex items-center justify-between w-full cursor-pointer">
      <span className="px-4 py-2 text-sm text-[#97A9AC]">{placeHolder}</span>
      <div className="flex flex-row border-l border-[#CCCCCC] ">
      <Image
          src={"/upload-svgrepo-com.svg"}
          alt="upload"
          height={15}
          width={15}
          priority={true}
          quality={100}
          className="ml-2"
        />
        <span className=" text-[#707070]  px-4 py-2 font-semibold text-xs  ">
       
          Upload
        </span>
      </div>
      <input type="file" className="hidden" />
    </label>
  </div>
);
