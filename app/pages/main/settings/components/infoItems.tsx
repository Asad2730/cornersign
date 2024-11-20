import { CustomInput } from "@/app/common/components/customInput";

interface InfoItemProp {
    label: string;
    value: string;
  }
  export const InfoItem = ({ label, value }: InfoItemProp) => (
    <div className="grid grid-cols-1 gap-4">
      <p className="text-[#344767]">{label}</p>
      <p className="text-gray-900">{value}</p>
    </div>
  );
  
 export  const EditInfoItem = ({ label, value }: InfoItemProp) => (
    <div className="grid grid-cols-1 gap-4">
      <p className="text-[#344767]">{label}</p>
      <CustomInput placeHolder={value} />
    </div>
  );
  