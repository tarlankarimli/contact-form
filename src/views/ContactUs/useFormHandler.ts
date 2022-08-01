import { useFormik, validateYupSchema, yupToFormErrors } from "formik";
import { IContactUsFormValues } from "./model";
import { contactUsValidationSchema } from "./validation-schema";

interface IProps {
  handleSubmit: () => void;
}

export const useFormHandler = (props: IProps) => {
  const { handleSubmit } = props;
  return useFormik<IContactUsFormValues>({
    enableReinitialize: true,
    initialValues: {} as IContactUsFormValues,
    validateOnChange: false,

    onSubmit: () => {
      handleSubmit();
    },
    validate: (values: IContactUsFormValues) => {
      try {
        validateYupSchema<IContactUsFormValues>(
          values,
          contactUsValidationSchema,
          true,
          {}
        );
      } catch (err) {
        return yupToFormErrors(err);
      }
      return {};
    },
  });
};
