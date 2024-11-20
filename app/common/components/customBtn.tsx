import Image from "next/image";


interface ICustomBtn {
  label: string;
  iconSrc?: string;
  onClick?: () => void;
  className?: string;
  
}

export const CustomBtn = ({
  label,
  iconSrc,
  onClick,
  className,
}: ICustomBtn) => {
  const style = className
  ? className
  : `${iconSrc
    ? "inline-flex items-center justify-center bg-[#FFFFFF] text-xs text-black border-[#E3EDFF]"
    : " bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC]"
  } gap-x-2 w-full  
     rounded-lg border  py-2.5`

  return (
    <button onClick={onClick} className={style}>
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt="img"
          width={100}
          height={100}
          priority={true}
          quality={100}
          className='className="-ml-0.5 h-5 w-5'
        />
      ) : null}

      {label}
    </button>
  );
};
