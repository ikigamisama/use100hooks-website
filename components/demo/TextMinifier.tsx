import { useTextMinifier } from "use100hooks";

const TextMinifier = () => {
  const text = `Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
    Nulla ac fermentum ipsum,`;

  const options = {
    removeSpace: true,
    removeTab: true,
    removeLine: true,
  };

  const minifiedText = useTextMinifier(text, options);

  return (
    <div>
      <h2>Minified Text</h2>
      <pre>{minifiedText}</pre>
    </div>
  );
};
export default TextMinifier;
