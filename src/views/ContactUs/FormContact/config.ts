import React from "react";

import {
  ContactUsServices,
  ICountriesRs,
  IIndustryRs,
  IItem,
  IRegionRs,
} from "api";
import { EInputFields, ESelectFields } from "enums";
import { FETCH_COUNTRIES, FETCH_INDUSTRY, FETCH_REGION } from "eventTypes";
import { IInputField, ISelectField } from "models";

/** Contact form selects */
export const contactFormSelects: ISelectField = {
  [ESelectFields.country]: {
    eventname: FETCH_COUNTRIES,
    placeholder: "Country*",
    service: (): Promise<ICountriesRs> => ContactUsServices.fetchCountries(),
    get(item: IItem) {
      return item.id;
    },
    component: React.lazy(
      () => import("components/SelectGenerator/SelectInput")
    ),
  },
  [ESelectFields.industry]: {
    eventname: FETCH_INDUSTRY,
    placeholder: "Industry*",
    service: (): Promise<IIndustryRs> => ContactUsServices.fetchIndustry(),
    get(item: IItem) {
      return item.id;
    },
    component: React.lazy(
      () => import("components/SelectGenerator/SelectInput")
    ),
  },
  [ESelectFields.region]: {
    eventname: FETCH_REGION,
    placeholder: "Region",
    service: (): Promise<IRegionRs> => ContactUsServices.fetchRegion(),
    get(item: IItem) {
      return item.id;
    },
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
