import PhoneticOption from "./PhoneticOption";

const PhoneticOptions = ({ choices }) => {
  return (
    <div
      id="phonetic_options"
      className="flex w-full h-12 bg-[#161616] text-white shadow-[0_0_10px_rgba(0,0,0,0.25)]"
    >
      {choices.map((choice, index) => (
        <PhoneticOption choice={choice} index={index} />
      ))}
    </div>
  );
};

export default PhoneticOptions;
