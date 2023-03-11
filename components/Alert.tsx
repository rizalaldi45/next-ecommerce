import { Dispatch, SetStateAction } from "react";

type AlertType = {
  type?: string;
  label: string;
  open: boolean;
  handleAlert: Dispatch<SetStateAction<boolean>>;
};

const Alert = ({
  type,
  label,
  open,
  handleAlert,
}: AlertType): JSX.Element => {
  const handleCLoseAlert = (): void => {
    handleAlert(false);
  };

  const renderTypeAlert = (): string => {
    switch (type) {
      case "error":
        return "font-semibold text-gray-700 text-justify";
      default:
        return "font-semibold text-gray-700 text-justify";
    }
  };

  return (
    <>
      {open && (
        <div className="fixed z-10 flex justify-between items-center gap-x-5 bottom-10 right-10 py-6 px-6 w-72 bg-white border border-gray-200 rounded-2xl shadow-lg">
          <div className={renderTypeAlert()}>{label}</div>
          <img
            className="h-3 w-3 cursor-pointer"
            src="images/close.png"
            onClick={handleCLoseAlert}
          />
        </div>
      )}
    </>
  );
};

export default Alert;
