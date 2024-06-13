import PhoneticElement from "./PhoneticElement";
import dictionary from "../logic/dictionary";

const PhoneticTable = () => {
  return (
    <div id="phonetic_table" className="my-4 flex justify-center items-center">
      {Object.entries(dictionary).map(([key, valueArray]) => (
        <PhoneticElement russian={key} arr={valueArray} />
      ))}
    </div>
  );
};

export default PhoneticTable;
