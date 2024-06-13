import PhoneticTable from "./PhoneticTable";
import Transliterator from "./transliterator";

const Content = () => {
  return (
    <div id="content" className="flex flex-col">
      <h1 className="text-title font-black">WeTranslit</h1>
      <p className="normal">
        WeTranslit is a web service that allows you to transliterate from the
        modern Latin alphabet to the Cyrillic one. Simply write in the field
        below how Russian letters sound and it will be converted to one. The
        table below can help you transliterate better.
      </p>
      <PhoneticTable />
      <Transliterator />
    </div>
  );
};

export default Content;
