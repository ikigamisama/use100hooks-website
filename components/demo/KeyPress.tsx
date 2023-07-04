import { useKeyPress } from "use100hooks";

const KeyPress = () => {
  const aKeyPressed = useKeyPress("a");
  const bKeyPressed = useKeyPress("b");
  return (
    <section>
      <h2>Press 'a' or 'b' on the keyboard</h2>
      <p>Pressed 'a': {aKeyPressed ? "Yes" : "No"}</p>
      <p>Pressed 'b': {bKeyPressed ? "Yes" : "No"}</p>
    </section>
  );
};
export default KeyPress;
