import PhoneticElement from "./PhoneticElement";
import dictionary from "../logic/dictionary";

const PhoneticTable = () => {
  return (
    <div
      id="phonetic_table"
      className="my-4 flex justify-center items-center flex-wrap"
    >
      {Object.entries(dictionary).map(([key, valueArray], i) => (
        <PhoneticElement russian={key} arr={valueArray} key={i} />
      ))}
    </div>
  );
};

export default PhoneticTable;
