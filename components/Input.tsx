import Image, { StaticImageData } from "next/image";

type inputType = {
  type: string;
  rounded?: string;
  width: string;
  endIcon?: StaticImageData;
  placeholder?: string;
  onChange?: any;
};

const Input = ({
  type,
  rounded,
  width,
  endIcon,
  placeholder,
  onChange,
}: inputType): JSX.Element => {
  return (
    <div
      className={`border border-1 border-gray-200 focus:outline-none ${rounded} ${width} text-xs font-semibold flex`}
    >
      <input
        className={`focus:outline-none py-2 px-4 flex-1 ${rounded}`}
        placeholder={placeholder}
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
          <span>Search</span>
        </div>
      )}
    </div>
  );
};

export default Input;
