type ChipType = {
    type: string;
    text: string;
}

const Chip = ({type, text}: ChipType): JSX.Element => {
    return (
        <div className="border border-gray-200 drop-shadow-lg px-3 py-2 w-fit rounded-3xl flex items-center gap-x-3 mb-1">
            <div className="text-[11px] font-semibold">
            {type} : <span className="font-normal">{text}</span>
            </div>
            <div className="w-fit cursor-pointer">
                <img src="/images/close.png" width="7" height="9" />
            </div>
        </div>
    )
};

export default Chip;