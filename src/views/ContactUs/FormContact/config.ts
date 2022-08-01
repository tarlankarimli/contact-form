import React from "react";

import { EInputFields, ESelectFields } from "enums";
import { IInputField, ISelectField } from "models";
import { ContactUsServices, ICountriesRs, IIndustryRs, IRegionRs } from "api";

/** Contact form selects */
export const contactFormSelects: ISelectField = {
  [ESelectFields.country]: {
    eventname: "FETCH_COUNTRIES",
    placeholder: "Country*",
    service: (): Promise<ICountriesRs> => ContactUsServices.fetchCountries(),
    component: React.lazy(
      () => import("components/SelectGenerator/SelectInput")
    ),
  },
  [ESelectFields.industry]: {
    eventname: "FETCH_INDUSTRY",
    placeholder: "Industry*",
    service: (): Promise<IIndustryRs> => ContactUsServices.fetchIndustry(),
    component: React.lazy(
      () => import("components/SelectGenerator/SelectInput")
    ),
  },
  [ESelectFields.region]: {
    eventname: "FETCH_REGION",
    placeholder: "Region",
    service: (): Promise<IRegionRs> => ContactUsServices.fetchRegion(),
    component: React.lazy(
      () => import("components/SelectGenerator/SelectInput")
    ),
  },
};

/** Contact form inputs */
export const contactFormInputs: IInputField = {
  [EInputFields.firstName]: {
    placeholder: "First name*",
    required: true,
    type: "text",
    component: React.lazy(() => import("components/InputGenerator/Input")),
  },
  [EInputFields.lastName]: {
    placeholder: "Last name",
    type: "text",
    component: React.lazy(() => import("components/InputGenerator/Input")),
  },
  [EInputFields.email]: {
    placeholder: "Email*",
    required: true,
    type: "text",
    component: React.lazy(() => import("components/InputGenerator/Input")),
  },
  [EInputFields.jobTitle]: {
    placeholder: "Job title",
    type: "text",
    component: React.lazy(() => import("components/InputGenerator/Input")),
  },
  [EInputFields.companyName]: {
    placeholder: "Company name*",
    required: true,
    type: "text",
    component: React.lazy(() => import("components/InputGenerator/Input")),
  },
};
