import { useEffect, useState } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Carousel from "react-multi-carousel";

import CardProduct from "@/components/CardProduct";
import Button from "@/components/Button";

import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  miniLaptop: {
    breakpoint: { max: 1304, min: 1100 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1100, min: 734 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 734, min: 0 },
    items: 1,
  },
};

export default function Home(): JSX.Element {
  const { t } = useTranslation();
  const router = useRouter();
  const store = useSelector((state) => state);
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  const [centerMode, setCendterMode] = useState<boolean>(true);

  const productDiscount: string[] = [
    "Nike Jordan Air",
    "masker medis 4 ply pokana 4D kf94 isi 12 lbr - Beige sand",
    "Nike Jordan Air",
    "kaos import lengan pendek pria | baju pria import polos kaos ",
    "LIGER Handsfree headset earphone L-10 METAL stereo & bass ",
    "Nike Jordan Air",
    "kaos import lengan pendek pria | baju pria import polos kaos ",
    "LIGER Handsfree headset earphone L-10 METAL stereo & bass ",
  ];

  const serviceContent: Array<{
    title: string;
    subTitle: string;
    img: string;
  }> = [
    {
      title: t("fast_delivery"),
      subTitle: t("we_will_make_sure"),
      img: "url('/images/delivery.jpg')",
    },
    {
      title: t("online_payment_process"),
      subTitle: t("with_online_payment"),
      img: "url('/images/online-payment.jpg')",
    },
    {
      title: t("fast_res_support"),
      subTitle: t("problem_with_fast"),
      img: "url('/images/24-service.jpg')",
    },
  ];

  const redirectDetailProduct = (): void => {
    router.push("/detail?product_id=1");
  };

  useEffect(() => {
    addEventListener("resize", (event: UIEvent) => {
      const w = event.target as Window;
      setCurrentWidth(w.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (currentWidth <= 540 && currentWidth !== 0) {
      setCendterMode(false);
    } else {
      setCendterMode(true);
    }
  }, [currentWidth]);

  return (
    <>
      <Head>
        <title>Zorro | Find anything goods with reasonable price here</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="w-[90vw] max-w-screen-2xl mx-auto mb-10 p-2 mt-3 text-center h-96 flex flex-col items-center justify-center bg-gray-100 rounded-2xl">
          <h1 className="font-bold text-2xl">{t("find_anything_goods")}</h1>
          <h3 className="text-md leading-10 text-gray-400">
            {t("we_have_quality")}
          </h3>
          <Button
            btnText={t("explore_more")}
            margin="mt-5"
            rounded="rounded-3xl"
            fontSize="text-sm"
            link="explore"
          />
        </div>
        <div className="w-[90vw] max-w-screen-2xl mx-auto my-4">
          <div className="my-6">
            <h1 className="font-semibold text-lg">{t("best_selling")}</h1>
            <span className="text-sm text-gray-400">
              {t("most_order_week")}
            </span>
          </div>
          <div className="flex grid grid-flow-row-dense grid-rows-1 gap-4">
            <Carousel
              autoPlay={true}
              infinite={true}
              arrows={false}
              centerMode={centerMode}
              responsive={responsive}
            >
              <CardProduct
                orientation="horizontal"
                detailRedirect={redirectDetailProduct}
              />
              <CardProduct
                orientation="horizontal"
                detailRedirect={redirectDetailProduct}
              />
              <CardProduct
                orientation="horizontal"
                detailRedirect={redirectDetailProduct}
              />
              <CardProduct
                orientation="horizontal"
                detailRedirect={redirectDetailProduct}
              />
              <CardProduct
                orientation="horizontal"
                detailRedirect={redirectDetailProduct}
              />
              <CardProduct
                orientation="horizontal"
                detailRedirect={redirectDetailProduct}
              />
            </Carousel>
          </div>
        </div>
        <div className="w-full h-auto py-14 my-10 bg-gray-100 flex flex-col items-center justify-center">
          <div className="w-[90vw] max-w-screen-2xl flex flex-col items-center justify-center">
            <h1 className="bolded font-bold text-3xl text-center">
              {t("get_attractive")}
            </h1>
            <h3 className="text-sm text-center mt-4 text-gray-500">
              {t("shoping_is_bit")}
            </h3>
            <h3 className="text-sm text-center mt-[4px] text-gray-500">
              {t("trouble_balance")}
            </h3>
            <Button
              btnText={t("learn_more")}
              margin="mt-5"
              rounded="rounded-3xl"
              fontSize="text-sm"
            />
            <div className="mx-auto flex flex-col mt-10">
              <div className="flex justify-between">
                <span className="text-[10px]">{t("discounted_product")}</span>
                <a href="" className="text-[10px]">{t("show_all")}</a>
              </div>
              <div className="flex mt-5 flex-wrap">
                {productDiscount.map((e, i) => (
                  <Button
                    key={i}
                    btnText={e}
                    margin="mr-5 mb-3"
                    rounded="rounded-3xl"
                    fontSize="text-[9px]"
                    padding="py-[6px] px-4"
                    color="bg-white"
                    textColor="text-black"
                    maxWidth="w-24"
                    shadow="drop-shadow-md"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90vw] max-w-screen-2xl mx-auto my-4">
          <div className="my-6">
            <h1 className="font-semibold text-lg">
              {t("weekly_popular_product")}
            </h1>
            <span className="text-sm text-gray-400">
              {t("popular_this_week")}
            </span>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-7">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
              <CardProduct
                key={e}
                orientation="vertical"
                detailRedirect={redirectDetailProduct}
              />
            ))}
          </div>
        </div>
        <div className="w-[90vw] max-w-screen-2xl mx-auto my-6">
          <div className="my-6">
            <h1 className="font-semibold text-lg">{t("services_to_help")}</h1>
            <span className="text-sm text-gray-400">
              {t("our_customer_services")}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceContent.map((e, i) => (
              <div
                key={`service-card-${i}`}
                className="h-96 bg-gray-100 rounded-2xl shadow"
              >
                <div className="px-14 py-10 h-[40%]">
                  <h1 className="bolded font-extrabold text-2xl">{e.title}</h1>
                  <span className="text-sm">{e.subTitle}</span>
                </div>
                <div
                  className="w-full h-[60%]"
                  style={{
                    backgroundImage: `${e.img}`,
                    backgroundSize: "cover",
                    borderBottomLeftRadius: "1rem",
                    borderBottomRightRadius: "1rem",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
