import { useFormik } from "formik";
import {IContactUsFormValues} from "./model"

export const useFormHandler = ({ handleSubmit }: any) => {
    return useFormik<IContactUsFormValues>({
        enableReinitialize: true,
        initialValues: {} as IContactUsFormValues,
        validateOnChange: false,

        onSubmit: values => {
            handleSubmit(values);
        },
    });
};
