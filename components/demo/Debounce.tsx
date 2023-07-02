import { useDebounce } from "@/dist/useDebounce";
import { useState } from "react";

const Debounce = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 250);
  return (
    <section>
      <div className="relative mb-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <p className="text-md text-left">Value: {debounceValue}</p>
    </section>
  );
};
export default Debounce;
