import { useState } from "react";
import Image from "next/image";

import Popover from "./Popover";
import Input from "./Input";

import SearchIcon from "@/public/images/loupe.png";
import CartIcon from "@/public/images/bag.png";

const Header = (): JSX.Element => {
  const [productSearch, setProductSearch] = useState<string>("");

  type dataType = {
    title: string;
    subTitle: string;
    img: string;
  };

  const dataPopoverSearchPeople: Array<dataType> = [
    {
      title: "Nike Jordan",
      subTitle: "disc 15%",
      img: "",
    },
    {
      title: "Adidas Classic",
      subTitle: "disc 20%",
      img: "",
    }
  ];

  return (
    <div className="w-[90vw] max-w-screen-2xl mx-auto py-5 bg-white flex items-center justify-between">
      <div className="font-bold">Zorro</div>
      <div className="flex items-center gap-x-5">
        <div className="hidden md:block">
          <Input
            type="text"
            rounded="rounded-3xl"
            placeholder="Search by product name"
            width="w-96"
            endIcon={SearchIcon}
            onChange={({ target }: any) => setProductSearch(target.value)}
          />
          <Popover
            width="w-48 md:w-72"
            height="h-fit"
            visible={productSearch !== ''}
            data={dataPopoverSearchPeople}
          />
        </div>
        <div className="flex items-center gap-x-2 cursor-pointer">
          <img
            className="h-5"
            src="/images/uk-flag.png"
            alt="active-lang"
            width={16}
            height={8}
          />
          <span className="font-bold text-sm">en</span>
        </div>
        <div className="cursor-pointer">
          <div className="absolute rounded-full w-4 h-4 -ml-1 -mt-[5px] bg-gray-200 mr-auto text-[8px] font-bold flex items-center justify-center shadow">
            0
          </div>
          <Image src={CartIcon} alt="profile-picture" width={25} height={25} />
        </div>
        <div className="rounded-full drop-shadow-xl">
          <Image
            className="rounded-full cursor-pointer"
            src="https://loremflickr.com/g/200/200/paris,girl/all"
            alt="profile-picture"
            width={27}
            height={27}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
