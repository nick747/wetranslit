const PhoneticElement = ({ russian, arr }) => {
  return (
    <div id="phoneticElement" className="flex flex-col">
      <div className="flex justify-center items-center p-1 bg-tone opacity-25 w-8 h-14">
        <p className="normal opacity-50 text-center">{arr.join(", ")}</p>
      </div>
      <div className="flex justify-center items-center p-1 bg-tone opacity-50 aspect-square w-8">
        <p className="normal font-bold">{russian}</p>
      </div>
    </div>
  );
};

export default PhoneticElement;
