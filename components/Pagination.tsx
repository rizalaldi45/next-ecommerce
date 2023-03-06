const Pagination  = (): JSX.Element => {
    let active = true;
    return (
        <div className="flex items-center gap-x-8">
            <img className="rotate-180 cursor-pointer" src='/images/arrow.png' width='14' height='15' />
            <span className="text-sm cursor-pointer">1</span>
            <span className="text-sm cursor-pointer">2</span>
            <span className={`text-sm cursor-pointer ${active && 'border border-gray-200 rounded-full px-3 py-2 drop-shadow-lg'}`}>3</span>
            <span className="text-sm cursor-pointer">4</span>
            <span className="text-sm cursor-pointer">5</span>
            <img className="cursor-pointer" src='/images/arrow.png' width='14' height='15' />
        </div>
    )
};

export default Pagination;