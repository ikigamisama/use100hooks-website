import { useTypingEffect } from "use100hooks";

const TypingEffect = () => {
  const text = "Hello World";
  const displayText = useTypingEffect(text, 150);

  return <h1>{displayText}</h1>;
};
export default TypingEffect;
