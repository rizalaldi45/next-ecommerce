import Image from "next/image";
import { useTranslation } from "react-i18next";

import Button from "./Button";

type cardProductType = {
  orientation: string;
  detailRedirect: Function;
};

const CardProduct = ({
  orientation,
  detailRedirect,
}: cardProductType): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      {orientation === "horizontal" ? (
        <div className="grid w-[20rem] h-52 shadow border border-1 border-gray-100 rounded-2xl mb-2">
          <div className="flex">
            <div
              className="w-[60%] h-full rounded-tl-2xl rounded-bl-2xl"
              style={{
                backgroundImage: `url('/images/product-2.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-6 h-6 m-3 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <Image
                  src="/images/heart-outlined.png"
                  alt="like-outlined"
                  width={12}
                  height={11}
                />
              </div>
            </div>
            <div className="pl-6 flex flex-col justify-center items-start">
              <h3 className="font-bold cursor-pointer" onClick={() => detailRedirect()}>
                Nike Jordan Air Limited
              </h3>
              <h5 className="bolded my-1 text-xs text-gray-500">$ 700</h5>
              <Button
                btnText={t("add_cart")}
                fontSize="text-[10px]"
                padding="px-[14px] py-[5px]"
                rounded="rounded-2xl"
                margin="mt-4"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid h-80 shadow border border-1 border-gray-100 rounded-2xl mb-2">
          <div className="flex flex-col">
            <div
              className="w-full h-[60%] rounded-tl-2xl rounded-tr-2xl"
              style={{
                backgroundImage: `url('/images/product-2.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-6 h-6 m-3 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <Image
                  src="/images/heart-outlined.png"
                  alt="like-outlined"
                  width={12}
                  height={11}
                />
              </div>
            </div>
            <div className="py-6 px-4 flex flex-col justify-center items-start">
              <h3
                className="font-bold cursor-pointer"
                onClick={() => detailRedirect()}
              >
                Nike Jordan Air Limited
              </h3>
              <h5 className="bolded my-1 text-xs text-gray-500">$ 700</h5>
              <div className="w-full flex justify-between">
                <div className="flex gap-x-1">
                  {[1, 2, 3, 4, 5].map((e) => (
                    <Image
                      key={e}
                      className="h-[8px]"
                      src="/images/star.png"
                      alt="star-filled"
                      width={9}
                      height={9}
                    />
                  ))}
                </div>
                <div className="text-xs">(129)</div>
              </div>
              <Button
                btnText={t("add_cart")}
                fontSize="text-[10px]"
                padding="px-[14px] py-[5px]"
                rounded="rounded-2xl"
                margin="mt-4"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardProduct;
