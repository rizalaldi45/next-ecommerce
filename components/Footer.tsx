import Input from "@/components/Input";

const Footer = (): JSX.Element => {
  return (
    <div className="w-full h-96 py-10 flex items-end justify-center">
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
        <div className="mt-20 flex justify-between items-center">
          <Input
            type="text"
            rounded="rounded-3xl"
            placeholder="Enter your email"
            width="w-96"
            padding="py-3 px-5"
            endIconString="Subscribe"
          />
          <div>© 2023 Zorro UI. All rights reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
