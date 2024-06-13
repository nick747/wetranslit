import PhoneticTable from "./PhoneticTable";
import Transliterator from "./transliterator";

const Content = () => {
  return (
    <div id="content" className="flex flex-col">
      <h1 className="text-title font-black">WeTranslit</h1>
      <p className="normal">
        WeTranslit is a web service that allows you to transliterate from the
        modern Latin alphabet to the Cyrillic one. Simply write in the field
        below how Russian letters sound and it will convert them. The table
        below can help you transliterate better.
      </p>
      <PhoneticTable />
      <Transliterator />
      <p className="normal">
        If you find WeTranslit useful, consider{" "}
        <a
          className="underline font-bold"
          target="_blank"
          href="https://donate.stripe.com/5kA176dnz8QI3FC288"
        >
          buying me a coffee
        </a>{" "}
        ! Your support helps keep this service running.
      </p>
    </div>
  );
};

export default Content;
