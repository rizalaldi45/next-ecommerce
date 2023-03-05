import { useState } from "react";
import { useTranslation } from "react-i18next";

type DestinationRow = {
  id: string;
  name: string;
};

type Destination = {
  province: DestinationRow;
  city: DestinationRow;
  distric: DestinationRow;
};

const dummyProvince = [
  {
    id: "1",
    name: "Jawa Barat",
  },
  {
    id: "2",
    name: "Jawa Tengah",
  },
  {
    id: "3",
    name: "Jawa Timur",
  },
  {
    id: "4",
    name: "DKI Jakarta",
  },
];

const dummyCity = [
  {
    id: "1",
    name: "Bekasi",
  },
  {
    id: "2",
    name: "Jepara",
  },
  {
    id: "3",
    name: "Surabaya",
  },
  {
    id: "4",
    name: "Jakarta Timur",
  },
];

const dummyDistric = [
  {
    id: "1",
    name: "Jatiasih",
  },
  {
    id: "2",
    name: "Tahunan",
  },
  {
    id: "3",
    name: "Wonokromo",
  },
  {
    id: "4",
    name: "Cakung",
  },
];

const DeliveryDestination = (): JSX.Element => {
  const { t } = useTranslation();
  const [activeSelectDelivery, setActiveSelectDelivery] = useState<number>(1);
  const [onSelectDelivery, onSetSelectDelivery] = useState<boolean>(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination>({
    province: { id: "", name: "" },
    city: { id: "", name: "" },
    distric: { id: "", name: "" },
  });

  const handlePopupDelivery = (): void => {
    onSetSelectDelivery(!onSelectDelivery);
  };

  const handleRenderSelectDestination = (): JSX.Element => {
    const { province, city, distric } = selectedDestination;
    return (
        <>
            {province.name !== '' && distric.name !== '' && city.name ? 
                <div>
                    {province.name && `${province.name}/`}{city.name && `${city.name}/`}
                    {distric.name && `${distric.name}`}
                </div>
            : 
                t('select_destination')
            }
        </>
    );
  };

  const handleSelectDestination = (
    id: string,
    name: string,
    type: string
  ): void => {
    setSelectedDestination((prev) => ({ ...prev, [type]: { id, name } }));
  };

  const renderTabDelivery = (): JSX.Element => {
    switch (activeSelectDelivery) {
      case 2:
        return (
          <div className="mt-2 flex flex-col text-xs max-h-32 overflow-y-scroll">
            {dummyCity.map((e) => (
              <span
                key={`list-city-${e.id}`}
                className="py-3 px-5 cursor-pointer"
                onClick={() => {
                  setActiveSelectDelivery(3);
                  handleSelectDestination(e.id, e.name, "city");
                }}
              >
                {e.name}
              </span>
            ))}
          </div>
        );
      case 3:
        return (
          <div className="mt-2 flex flex-col text-xs max-h-32 overflow-y-scroll">
            {dummyDistric.map((e) => (
              <span
                key={`list-distric-${e.id}`}
                className="py-3 px-5 cursor-pointer"
                onClick={() => {
                  onSetSelectDelivery(false);
                  setActiveSelectDelivery(1);
                  handleSelectDestination(e.id, e.name, "distric");
                }}
              >
                {e.name}
              </span>
            ))}
          </div>
        );
      default:
        return (
          <div className="mt-2 flex flex-col text-xs max-h-32 overflow-y-scroll">
            {dummyProvince.map((e) => (
              <span
                key={`list-province-${e.id}`}
                className="py-3 px-5 cursor-pointer"
                onClick={() => {
                  setActiveSelectDelivery(2);
                  handleSelectDestination(e.id, e.name, "province");
                }}
              >
                {e.name}
              </span>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="my-10">
      <h5 className="text-sm">{t("delivery_destination")}</h5>
      <div className="mt-4 flex flex-col">
        <div
          className="py-4 px-5 border border-gray-200 rounded-lg text-xs w-fit cursor-pointer"
          onClick={handlePopupDelivery}
        >
          {handleRenderSelectDestination()} 
        </div>
        {onSelectDelivery && (
          <div className="mt-14 py-4 flex flex-col gap-x-3 border border-gray-200 bg-white rounded-lg shadow w-fit absolute z-20">
            <div className="flex gap-x-2 border-b border-gray-100">
              <div
                className={`font-bold text-sm px-6 pb-3 ${
                  activeSelectDelivery !== 1 && "text-gray-300"
                }`}
              >
                Province
              </div>
              <div
                className={`font-bold text-sm px-6 ${
                  activeSelectDelivery !== 2 && "text-gray-300"
                }`}
              >
                City
              </div>
              <div
                className={`font-bold text-sm px-6 ${
                  activeSelectDelivery !== 3 && "text-gray-300"
                }`}
              >
                Distric
              </div>
            </div>
            <div className="flex flex-col mt-2 px-1">{renderTabDelivery()}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryDestination;
