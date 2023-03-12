import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import CardProduct from "@/components/CardProduct";
import Input from "@/components/Input";
import Rating from "@/components/Rating";
import Button from "@/components/Button";
import Chip from "@/components/Chip";
import Pagination from "@/components/Pagination";

const Explore = (): JSX.Element => {
  const router = useRouter();
  const [mobileFilter, setMobileFilter] = useState<boolean>(false);

  const redirectDetailProduct = (): void => {
    router.push("/detail?product_id=1");
  };

  const handleMobileFilter = () => {
    setMobileFilter(!mobileFilter);
  };

  const ComponentFilter = (): JSX.Element => {
    return (
      <>
        <h4 className="bolded text-l font-bold">Filter</h4>
        <div className="mt-2">
          <h5 className="text-m">Category</h5>
          <div className="mt-5 flex flex-col">
            <div>
              <input
                type="checkbox"
                id="custom-checkbox"
                name="custom-checkbox"
                value="Bike"
              />
              <label className="text-md ml-3" htmlFor="custom-checkbox">
                Shoes
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="custom-checkbox"
                name="custom-checkbox"
                value="Bike"
              />
              <label className="text-md ml-3" htmlFor="custom-checkbox">
                Jacket
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="custom-checkbox"
                name="custom-checkbox"
                value="Bike"
              />
              <label className="text-md ml-3" htmlFor="custom-checkbox">
                T-shirt
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="custom-checkbox"
                name="custom-checkbox"
                value="Bike"
              />
              <label className="text-md ml-3" htmlFor="custom-checkbox">
                Gadget
              </label>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h5 className="text-m mt-5">Rating</h5>
          <div className="mt-2 flex flex-col">
            <div className="flex items-center mt-3 gap-x-3">
              <input
                type="checkbox"
                id="custom-checkbox"
                name="custom-checkbox"
                value="Bike"
              />
              <Rating count={5} />
            </div>
            <div className="flex items-center mt-3 gap-x-3">
              <input
                type="checkbox"
                id="custom-checkbox"
                name="custom-checkbox"
                value="Bike"
              />
              <Rating count={4} />
            </div>
            <div className="flex items-center mt-3 gap-x-3">
              <input
                type="checkbox"
                id="custom-checkbox"
                name="custom-checkbox"
                value="Bike"
              />
              <Rating count={3} />
            </div>
            <div className="flex items-center mt-3 gap-x-3">
              <input
                type="checkbox"
                id="custom-checkbox"
                name="custom-checkbox"
                value="Bike"
              />
              <Rating count={2} />
            </div>
            <div className="flex items-center mt-3 gap-x-3">
              <input
                type="checkbox"
                id="custom-checkbox"
                name="custom-checkbox"
                value="Bike"
              />
              <Rating count={1} />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h5 className="text-m mt-5">Price</h5>
          <div className="mt-5 flex flex-col">
            <Input
              type="number"
              rounded="rounded-3xl"
              placeholder="Input Minimal Price"
              width="w-[85%]"
              padding="py-3 px-5"
            />
            <Input
              type="number"
              rounded="rounded-3xl"
              placeholder="Input Maximal Price"
              width="w-[85%]"
              margin="mt-3"
              padding="py-3 px-5"
            />
          </div>
        </div>
        <div className="mt-2">
          <Button
            btnText="apply filter"
            margin="mt-5"
            rounded="rounded-3xl w-fit"
            fontSize="text-sm"
          />
        </div>
      </>
    );
  };

  const MobileFilter = () : JSX.Element => (
    <>
      {mobileFilter && (
        <div className="w-auto absolute z-40 p-4 m-5 bg-white shadow-xl border border-gray-100 rounded-lg">
          <ComponentFilter />
        </div>
      )}
    </>
  );

  return (
    <>
      <Head>
        <title>Zorro | Find anything goods with reasonable price here</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-[90vw] max-w-screen-2xl mx-auto mt-10">
        <div className="flex gap-x-3">
          <div className="w-[20vw] hidden md:block">
            <ComponentFilter />
          </div>
          <div className="w-[100vw] md:w-[80vw] flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div className="flex flex-wrap gap-x-3">
                <Chip type="category" text="Gadget" />
                <Chip type="rating" text="5" />
                <Chip type="price" text="700 - 800" />
              </div>
              <div className="block md:hidden flex flex-col items-end">
                <img
                  className="w-[15px] h-[15px] cursor-pointer"
                  src="images/filter.png"
                  onClick={handleMobileFilter}
                />
                <MobileFilter />
              </div>
            </div>
            <div className="flex justify-between grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
                <CardProduct
                  key={e}
                  orientation="vertical"
                  detailRedirect={redirectDetailProduct}
                />
              ))}
            </div>
            <div className="mt-8 flex justify-center md:justify-end">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
