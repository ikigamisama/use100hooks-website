import { useFocus } from "use100hooks";

const Focus = () => {
  const { inputRef, isFocused } = useFocus();

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Focus Example</h1>
      <input
        className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
        ref={inputRef}
        type="text"
      />
      <p>Start typing in the input field to see the focus in action.</p>
      <p>Is Focus {isFocused.toString()}</p>
    </div>
  );
};
export default Focus;
