import * as Yup from "yup";

/*
 * Validation scheme of the contact us form.
 */

/**  Yup string validators */
const yupString = Yup.string() as Yup.StringSchema;

export const contactUsValidationSchema = Yup.object().shape({
  country: Yup.object().shape({
    name: yupString.required(),
  }),
  industry: Yup.object().shape({
    name: yupString.required(),
  }),
  firstName: yupString.required(),
  email: yupString.required(),
  companyName: yupString.required(),
});
