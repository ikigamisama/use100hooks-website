import { useScript } from "use100hooks";

const Script = () => {
  useScript(
    "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"
  );

  return (
    <div>
      <h1>useScript Example</h1>
      <p>This is an example of using the useScript hook.</p>
      <p>
        Added
        https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js
      </p>
    </div>
  );
};
export default Script;
