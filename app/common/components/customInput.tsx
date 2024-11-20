import Image from "next/image";
import { HTMLInputTypeAttribute } from "react";

interface ICustomInput {
  placeHolder?: string;
  type?: HTMLInputTypeAttribute;
  leadingIcon?: string;
  trailingIcon?: string;
  isReadOnly?: boolean;
  iconSize?: number;
  applyReadOnlyStyle?: boolean;
 
}

export const CustomInput = ({
  placeHolder,
  type,
  leadingIcon,
  trailingIcon,
  isReadOnly,
  iconSize = 20,
  applyReadOnlyStyle = true,
}: ICustomInput) => {
  const style =
    isReadOnly && applyReadOnlyStyle
      ? `block w-full  py-1.5 bg-gray-50
    ${leadingIcon ? "pl-10" : "pl-3"} 
    ${trailingIcon ? "pr-10" : "pr-3"} 
    shadow-sm placeholder:text-[#050505] sm:text-sm sm:leading-6 `
      : `block w-full rounded-md border border-[#CCCCCC] py-1.5 
    ${leadingIcon ? "pl-10" : "pl-3"} 
    ${trailingIcon ? "pr-10" : "pr-3"} 
    shadow-sm placeholder:text-[#97A9AC] sm:text-sm sm:leading-6 text-black`;

  return (
    <div className="relative">
      {leadingIcon && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Image
            src={leadingIcon}
            alt="leading"
            height={iconSize}
            width={iconSize}
            quality={100}
            priority={true}
          />
        </div>
      )}
      <input
        placeholder={placeHolder}
        readOnly={isReadOnly}
        className={style}
        type={type}
      />

      {trailingIcon && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <Image
            src={trailingIcon}
            alt="trailing"
            height={iconSize}
            width={iconSize}
            quality={100}
            priority={true}
          />
        </div>
      )}
    </div>
  );
};
