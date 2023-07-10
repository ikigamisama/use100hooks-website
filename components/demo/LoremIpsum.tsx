import { useLoremIpsum } from "use100hooks";

const LoremIpsum = () => {
  const loremIpsum = useLoremIpsum({ words: 50, sentences: 3, paragraphs: 2 });

  return (
    <div>
      <h2>Lorem Ipsum Text</h2>
      <p>{loremIpsum}</p>
    </div>
  );
};
export default LoremIpsum;
