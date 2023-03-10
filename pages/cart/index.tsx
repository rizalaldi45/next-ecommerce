import { useState } from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import Button from "@/components/Button";
import DeliveryDestination from "@/components/DeliveryDestination";

const Cart = (): JSX.Element => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState<number>(1);

  const BtnStock = (): JSX.Element => (
    <div className="h-[35px] flex justify-between">
      <div>
        <h5 className="text-sm">
          {t("we_have")} 25 {t("stock")}
        </h5>
        <h6 className="mt-3 underline cursor-pointer text-xs">
          Delete this item
        </h6>
      </div>
      <div className="flex gap-x-4">
        <div className="py-4 border border-gray-300 w-fit rounded-xl bg-gray-100 cursor-pointer">
          <button
            className="font-bold px-3 flex items-center"
            onClick={() => setQuantity(quantity - 1)}
          >
            <div className="w-2 border-b border-gray-500" />
          </button>
        </div>
        <div className="border border-gray-300 w-fit rounded-xl bg-gray-100">
          <input
            className="mt-[7px] outline-none px-2 text-sm text-center w-14 text-gray-500 bg-gray-100"
            defaultValue={quantity}
            min={1}
          />
        </div>
        <div className="border border-gray-300 w-fit rounded-xl bg-gray-100 cursor-pointer">
          <button
            className="font-bold text-gray-500 px-3 flex items-center"
            onClick={() => setQuantity(quantity + 1)}
          >
            <div className="-mb-9">+</div>
          </button>
        </div>
      </div>
    </div>
  );

  const CartItem = (): JSX.Element => (
    <div className="w-full mb-10">
      <div className="flex gap-x-7 mb-5">
        <input type="checkbox" id="custom-checkbox" checked />
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <img className="w-16 h-16 rounded" src="images/product-2.jpg" />
            <h3 className="text-xl">Nike Jordan Air Limited</h3>
          </div>
          <div>Rp. 1.500.000</div>
        </div>
      </div>
      <BtnStock />
    </div>
  );

  return (
    <>
      <Head>
        <title>Zorro | Find anything goods with reasonable price here</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-[90vw] md:w-[75vw] max-w-screen-2xl mx-auto mt-5 py-5">
        <h1 className="bolded text-xl">Cart</h1>
        <h5 className="text-gray-500">Checkout all item</h5>

        <div className="flex flex-col md:flex-row justify-between mt-12">
            <div className="w-full md:w-[55%] flex flex-col">
                {[1, 2, 3].map((i) => (
                <CartItem key={i} />
                ))}
            </div>
            <div className="w-full md:w-[35%]">
                <div className="mb-4">
                    <h1 className="bolded">Delivery Address</h1>
                    <h5 className="text-gray-500">Set your delivery address</h5>
                    <DeliveryDestination />
                </div>
                <div>
                    <h1 className="bolded">Order Summary</h1>
                    <div className="flex justify-between mt-4">
                        <span>Total Price (3 item)</span>
                        <span>Rp. 4.500.000</span>
                    </div>
                    <div className="flex justify-between mt-4 border-b border-gray-200 pb-4">
                        <span>Total Delivery</span>
                        <span>Rp. 45.000</span>
                    </div>
                    <div className="flex justify-between mt-4">
                        <span>Total</span>
                        <span>Rp. 4.545.000</span>
                    </div>
                    <Button btnText="Buy" margin="mt-6" rounded="rounded-3xl" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
