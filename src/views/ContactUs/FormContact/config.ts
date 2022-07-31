import React from "react";

import { ESelectFields } from "enums";
import { ISelectField } from "models";
import { ContactUsServices, ICountriesRs, IIndustryRs, IRegionRs } from "api";

/** Contact form selects */
export const contactFormSelects: ISelectField = {
  [ESelectFields.country]: {
    eventname: "FETCH_COUNTRIES",
    placeholder: "Country*",
    service: (): Promise<ICountriesRs> => ContactUsServices.fetchCountries(),
    component: React.lazy(() => import("components/SelectGenerator/SelectInput")),
  },
  [ESelectFields.industry]: {
    eventname: "FETCH_INDUSTRY",
    placeholder: "Industry*",
    service: (): Promise<IIndustryRs> => ContactUsServices.fetchIndustry(),
    component: React.lazy(() => import("components/SelectGenerator/SelectInput")),
  },
  [ESelectFields.region]: {
    eventname: "FETCH_REGION",
    placeholder: "Region",
    service: (): Promise<IRegionRs> => ContactUsServices.fetchRegion(),
    component: React.lazy(() => import("components/SelectGenerator/SelectInput")),
  },
};
