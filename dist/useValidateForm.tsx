import { useState } from "react";

type ValidationRule = {
  validate: (value: string) => boolean;
  message: string;
};

type ValidationSchema = {
  [key: string]: ValidationRule[];
};

type FormErrors = {
  [key: string]: string[];
};

export const useValidateForm = (
  initialFormState: Record<string, string>,
  validationSchema: ValidationSchema
) => {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleInputChange = (fieldName: string, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const validateForm = () => {
    const errors: FormErrors = {};

    for (const fieldName in validationSchema) {
      const fieldErrors: string[] = [];

      for (const rule of validationSchema[fieldName]) {
        if (!rule.validate(formState[fieldName])) {
          fieldErrors.push(rule.message);
        }
      }

      if (fieldErrors.length > 0) {
        errors[fieldName] = fieldErrors;
      }
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return { formState, formErrors, handleInputChange, validateForm };
};
