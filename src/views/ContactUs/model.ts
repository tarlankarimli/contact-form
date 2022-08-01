import { IItem } from "api";

export interface IContactUsFormValues {
  /** Country */
  country: IItem;

  /** Industry */
  industry: IItem;

  /** Region */
  region: IItem;

  /** First name */
  firstName: string;

  /** Last name */
  lastName: string;

  /** Email */
  email: string;

  /** Job title */
  jobTitle: string;

  /** Company name */
  companyName: string;

  /** Description */
  description: string;

  /** Term policy */
  termPolicy: boolean;

  /** Newsletter */
  newsletter: boolean;
}
