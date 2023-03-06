import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";

type inputType = {
  type: string;
  rounded?: string;
  width: string;
  endIcon?: StaticImageData | string;
  placeholder?: string | null;
  onChange?: any;
  padding?: string;
  endIconString?: string | null;
  margin?: string;
};

const Input = ({
  type,
  rounded,
  width,
  endIcon,
  placeholder,
  onChange,
  padding,
  endIconString,
  margin,
}: inputType): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div
      className={`border border-gray-200 focus:outline-none ${rounded} ${width} ${margin} text-xs font-semibold flex`}
    >
      <input
        className={`focus:outline-none w-full py-2 px-4 flex-1 ${rounded} ${padding}`}
        placeholder={placeholder ?? ""}
        type={type}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
      {endIcon && (
        <div className="bg-gray-100 px-4 rounded-tr-3xl rounded-br-3xl cursor-pointer flex items-center">
          <Image
            className="mr-[8px]"
            src={endIcon}
            alt="search-icon"
            width={12}
            height={12}
          />
          <span>{t("search")}</span>
        </div>
      )}
      {endIconString && (
        <div className="bg-gray-100 px-4 rounded-tr-3xl rounded-br-3xl cursor-pointer flex items-center">
          <span>{endIconString}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
