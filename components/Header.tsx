import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Image from "next/image";

import Popover from "./Popover";
import Input from "./Input";

import SearchIcon from "@/public/images/loupe.png";
import CartIcon from "@/public/images/bag.png";

const Header = ({ changeLanguage }: any): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation();

  const [productSearch, setProductSearch] = useState<string>("");
  const [clickLanguage, setClickLanguage] = useState<boolean>(false);
  const [clickUserIcon, setClickUserIcon] = useState<boolean>(false);
  const [activeLanguage, setActiveLanguage] = useState<string>("");

  type dataType = {
    title: string;
    subTitle: string;
    img: string;
    action?: Function;
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
    },
  ];

  const redirectToHome = (): void => {
    router.push("/");
  };

  const dataLanguage: Array<{ title: string; action: Function }> = [
    { title: "English", action: () => changeLanguage("") },
    { title: "Indonesia", action: () => changeLanguage("id") },
  ];

  const dataUserIcon: Array<{ title: string; action: Function }> = [
    { title: "Account", action: () => router.push("/account") },
    { title: "Logout", action: () => null },
  ];

  useEffect(() => {
    if (router.locale) {
      setActiveLanguage(router.locale);
    }
  }, []);

  return (
    <div className="w-[90vw] max-w-screen-2xl mx-auto py-5 bg-white flex items-center justify-between">
      <div
        className="bolded font-bold text-xl cursor-pointer"
        onClick={redirectToHome}
      >
        Zorro
      </div>
      <div className="flex items-center gap-x-5">
        <div className="hidden md:block">
          <Input
            type="text"
            rounded="rounded-3xl"
            placeholder={t("search_by_product")}
            width="w-96"
            endIcon={SearchIcon}
            onChange={({ target }: any) => setProductSearch(target.value)}
          />
          <Popover
            width="w-48 md:w-72"
            height="h-fit"
            visible={productSearch !== ""}
            data={dataPopoverSearchPeople}
            onLeave={() => null}
          />
        </div>
        <div className="flex flex-col items-start">
          <div
            className="flex items-center gap-x-2 cursor-pointer"
            onClick={() => setClickLanguage(!clickLanguage)}
          >
            <img
              className="h-5"
              src={`/images/${activeLanguage}-flag.png`}
              alt="active-lang"
              width={18}
              height={9}
            />
            <span className="font-bold text-md">{activeLanguage}</span>
          </div>
          <div>
            <Popover
              width="w-fit -ml-16"
              height="h-fit"
              visible={clickLanguage}
              data={dataLanguage}
              onLeave={setClickLanguage}
            />
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="absolute rounded-full w-4 h-4 -ml-1 -mt-[5px] bg-gray-200 mr-auto text-[8px] font-bold flex items-center justify-center shadow">
            0
          </div>
          <Image src={CartIcon} alt="profile-picture" width={25} height={25} />
        </div>
        <div className="flex flex-col items-end rounded-full drop-shadow-xl">
          <Image
            className="rounded-full cursor-pointer"
            src="https://loremflickr.com/g/200/200/paris,girl/all"
            alt="profile-picture"
            width={29}
            height={29}
            onClick={() => setClickUserIcon(true)}
          />
          <div>
            <Popover
              width="w-fit -ml-16"
              height="h-fit"
              visible={clickUserIcon}
              data={dataUserIcon}
              onLeave={setClickUserIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
