import "../App.css";
const PhoneticOption = ({ choice, onChoiceClick }) => {
  return (
    <div
      id="phonetic_option"
      className="flex gap-1 h-full justify-center items-center p-1 opacity-50 w-32 cursor-pointer"
      onClick={() => onChoiceClick(choice)}
    >
      <p className="normal font-bold">{choice}</p>
    </div>
  );
};

export default PhoneticOption;
