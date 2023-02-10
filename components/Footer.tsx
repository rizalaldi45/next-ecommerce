import { useTranslation } from "react-i18next";
import Input from "@/components/Input";

const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-screen-2xl mx-auto h-96 py-10 flex items-end justify-center">
      <div className="w-[90vw] flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <div className="bolded text-xl text-center">Zorro</div>
          <ul className="mt-7 flex gap-x-10">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Overview</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Help</li>
          </ul>
        </div>
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center">
          <Input
            type="text"
            rounded="rounded-3xl"
            placeholder={t("enter_your_email")}
            width="w-96"
            padding="py-3 px-5"
            endIconString={t('subscribe')}
          />
          <div className="mt-7 md:mt-0">
            © 2023 Zorro UI. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
