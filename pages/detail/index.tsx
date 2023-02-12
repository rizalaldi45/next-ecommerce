const Detail = (): JSX.Element => {
  return (
    <div className="w-[80vw] max-w-screen-2xl mx-auto">
      <ul className="flex gap-x-3 my-6">
        <li>Shoes</li>
        <li>/</li>
        <li>Nike</li>
        <li>/</li>
        <li>Nike Jordan Air Limited</li>
      </ul>
      <div className="flex gap-x-20">
        <div className="w-5/12 h-[35rem] bg-gray-200 rounded-xl"></div>
        <div className="w-5/12">
          <h1 className="bolded text-2xl">Nike Jordan Air Limited</h1>
          <span className="text-sm">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
