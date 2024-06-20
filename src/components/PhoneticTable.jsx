import dictionary from "../logic/dictionary";

const PhoneticTable = () => {
  return (
    <div
      id="phonetic_table"
      className="my-4 flex justify-center items-center flex-wrap"
    >
      {Object.entries(dictionary).map(([key, valueArray], i) => (
        <div id="phonetic_element" className="flex flex-col">
          <div className="flex justify-center items-center p-1 bg-tone opacity-25 w-8 h-14">
            <p className="normal opacity-50 text-center">
              {valueArray.join(", ")}
            </p>
          </div>
          <div className="flex justify-center items-center p-1 bg-tone opacity-50 aspect-square w-8">
            <p className="normal font-bold">{key}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhoneticTable;
