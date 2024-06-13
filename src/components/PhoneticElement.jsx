const PhoneticElement = ({ russian, arr }) => {
  return (
    <div id="phoneticElement" className="flex flex-col">
      <div className="flex justify-center items-center p-1 bg-tone opacity-25 w-10 h-14">
        <p className="normal opacity-50 ">{arr.join(", ")}</p>
      </div>
      <div className="flex justify-center items-center p-1 bg-tone opacity-50 aspect-square w-10">
        <p className="normal font-bold">{russian}</p>
      </div>
    </div>
  );
};

export default PhoneticElement;
