import { RestClient } from "helpers/rest";
import { IAsyncData } from "models";

/** Country model */
export interface ICountry {
    /** Name */
    name: string;

    /** Flag */
    flag: string;

    /** Code */
    code: string;

    /** Dial code */
    dial_code: string;
}

/** Contact form countries response */
export interface ICountriesRs extends IAsyncData<ICountry[]> {}

/**
 * Api endpoints.
 */
const endpoints = {
    contactUs: {
        countries(): string {
            return "/countries";
        },
    },
};

/** Rest client instance */
const restClient = new RestClient();

/** Contact us services */
export const ContactUsServices = {
    /** Fetch countries */
    fetchCountries: (): Promise<ICountriesRs> => restClient.get<ICountriesRs>(endpoints.contactUs.countries()),
};
