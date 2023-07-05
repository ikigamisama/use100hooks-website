import { useValidateForm } from "use100hooks";

type ValidationSchema = {
  [key: string]: ValidationRule[];
};

type ValidationRule = {
  validate: (value: string) => boolean;
  message: string;
};

const ValidateForm = () => {
  const validationSchema: ValidationSchema = {
    name: [
      {
        validate: (value: string) => value.length > 0,
        message: "Name is required",
      },
    ],
    email: [
      {
        validate: (value: string) => /\S+@\S+\.\S+/.test(value),
        message: "Invalid email format",
      },
    ],
  };

  const initialFormState = {
    name: "",
    email: "",
  };

  const { formState, formErrors, handleInputChange, validateForm } =
    useValidateForm(initialFormState, validationSchema);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-2 text-left text-sm font-bold text-sky-500">
          Name
        </label>
        <input
          type="text"
          className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
          value={formState.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        {formErrors.name && <span>{formErrors.name[0]}</span>}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-left text-sm font-bold text-sky-500">
          Email
        </label>
        <input
          type="email"
          className="block w-full p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
          value={formState.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        {formErrors.email && <span>{formErrors.email[0]}</span>}
      </div>
      <button
        className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
export default ValidateForm;
