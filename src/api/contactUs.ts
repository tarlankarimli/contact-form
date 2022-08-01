import { RestClient } from "helpers/rest";
import { IAsyncData } from "models";

/** Item */
export interface IItem {
    /** Name */
    name: string;

    /** Id */
    id: string;
}

/** Country model */
export interface ICountry {
    /** Name */
    name: string;

    /** Flag */
    flag: string;

    /** Id */
    id: string;

    /** Dial code */
    dial_code: string;
}

/** User contact model */
export interface IUserContact {
     /** Country */
  country: string;

  /** Industry */
  industry: string;

  /** Region */
  region: string;

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

// Request model

/** User contact request model */
export interface IUserContactRq extends IUserContact{}

// Response model

/** Industry model */
export interface IIndustry extends IItem{}

/** Region model */
export interface IRegion extends IItem{}

/** Contact form countries response */
export interface ICountriesRs extends IAsyncData<ICountry[]> {}

/** Contact form industry response */
export interface IIndustryRs extends IAsyncData<IIndustry[]> {}

/** Contact form region response */
export interface IRegionRs extends IAsyncData<IRegion[]> {}

/**
 * Api endpoints.
 */
const endpoints = {
    contactUs: {
        countries(): string {
            return "/countries";
        },
        industry(): string {
            return "/industry";
        },
        region(): string {
            return "/region";
        },
        userContact(): string {
            return "/user-contact";
        },
    },
};

/** Rest client instance */
const restClient = new RestClient();

/** Contact us services */
export const ContactUsServices = {
    /** Fetch countries */
    fetchCountries: (): Promise<ICountriesRs> => restClient.get<ICountriesRs>(endpoints.contactUs.countries()),

    /** Fetch industry */
    fetchIndustry: (): Promise<IIndustryRs> => restClient.get<IIndustryRs>(endpoints.contactUs.industry()),

    /** Fetch region */
    fetchRegion: (): Promise<IRegionRs> => restClient.get<IRegionRs>(endpoints.contactUs.region()),

    /** Post user contact */
    userContact: <IUserContactRq>(payload: IUserContactRq): Promise<void> =>
        restClient.post<IUserContactRq, void>(endpoints.contactUs.userContact(), payload),
};
