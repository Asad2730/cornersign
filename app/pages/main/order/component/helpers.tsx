import { CustomInput } from "@/app/common/components/customInput";
import { underline } from "@/app/common/style/styles";
import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

export const SectionHeading = ({ children }: SectionHeadingProps) => (
  <span className="font-bold text-[#000637] text-lg sm:text-xl block">{children}</span>
);



interface InputFieldProps {
  label: string;
  placeHolder: string;
  trailingIcon?: string;
  iconSize?: number;
  readOnly?: boolean;
}

export const InputField = ({ label, placeHolder, trailingIcon, iconSize, readOnly = false }: InputFieldProps) => (
  <div className="grid grid-cols-1 gap-1">
    <span className="text-[#050505] font-semibold text-sm">{label}</span>
    <CustomInput
      placeHolder={placeHolder}
      trailingIcon={trailingIcon}
      iconSize={iconSize}
      isReadOnly={readOnly}
    />
  </div>
);


interface IOrder {
  title :string
  value?:string
}

export const OrderHeader = ({ title }:IOrder) => (
  <div className="mt-4 mb-4">
    <span className="text-[#050505] font-bold text-lg  ">
      {title}
      {underline}
    </span>
  </div>
);

export const OrderGridCol_2 = ({ title, value }: IOrder) => (
  <div className="grid grid-cols-2 gap-1">
    <span className="text-[#67748E]">{title}:</span>
    <span className="text-[#252F40]">{value}</span>
  </div>
);



