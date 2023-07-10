import { usePasswordGenerator } from "use100hooks";

const PasswordGenerator = () => {
  const options = {
    length: 12,
    includeSpecialCharacters: true,
    includeUpperCase: true,
  };

  const { generatedPassword, regeneratePassword } =
    usePasswordGenerator(options);

  return (
    <div>
      <h2>Password Generator</h2>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        onClick={regeneratePassword}
      >
        Generate Password
      </button>
      <p>Generated Password: {generatedPassword}</p>
    </div>
  );
};
export default PasswordGenerator;
