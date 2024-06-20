const PhoneticOptions = ({ choices, onChoiceClick }) => {
  return (
    <div
      id="phonetic_options"
      className="flex w-full h-12 bg-[#161616] text-white shadow-[0_0_10px_rgba(0,0,0,0.25)]"
    >
      {choices.map((choice, index) => (
        <div
          id="phonetic_option"
          className="flex gap-1 grow h-full justify-center items-center p-1 opacity-50 w-32 cursor-pointer"
          onClick={() => onChoiceClick(choice)}
        >
          <p className="normal font-bold">{choice}</p>
        </div>
      ))}
    </div>
  );
};

export default PhoneticOptions;
