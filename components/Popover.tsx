import { Dispatch, SetStateAction } from "react";

type dataType = {
  title: string;
  subTitle?: string;
  img?: string;
  action?: any;
};

type popoverType = {
  width: string;
  height: string;
  data: Array<dataType>;
  visible: boolean;
  onLeave: Dispatch<SetStateAction<boolean>>
};

const Popover = ({
  width,
  height,
  data,
  visible,
  onLeave,
}: popoverType): JSX.Element => {
  return (
    <>
      {visible && (
        <div
          className={`absolute z-20 ${width} border border-gray-100 rounded-md shadow-md mt-2 py-2 bg-white`}
          onMouseLeave={() => onLeave(false)}
        >
          <div className={`popover ${height} overflow-y-scroll`}>
            {data.map((e) => (
              <div
                key={e.title}
                className="px-4 py-1 my-2 flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-x-4">
                  {e.img && (
                    <div className="w-9 h-9 bg-gray-300 rounded-full cursor-pointer" />
                  )}
                  <div onClick={() => e.action()}>
                    <span className="text-sm">{e.title}</span>
                    <div className="text-xs text-gray-300">{e.subTitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Popover;
