import Link from "next/link";

interface IFormHeader {
  title: string;
  subTitle: string;
  linkTitle: string;
  linkPath: string;
}

export const FormHeader = ({
  title,
  subTitle,
  linkTitle,
  linkPath,
}: IFormHeader) => (
  <div className="flex flex-col justify-center items-center space-y-1">
    <span className="text-center text-[#000637] font-bold text-xl">
      {title}
    </span>
    <span className="text-[#9399A3] text-xs">
       {subTitle}
      <Link
        href={linkPath}
        className="ml-1 text-sm text-[#0000EE] cursor-pointer"
      >
       {linkTitle}
      </Link>
    </span>
  </div>
);
