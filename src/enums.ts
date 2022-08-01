/**
 * API processing statuses.
 */
export enum EProcessStatus {
  /** Request canceled. */
  CANCELED = "CANCELED",

  /** Request fall via errors. */
  ERROR = "ERROR",

  /** Initial state. */
  IDLE = "IDLE",

  /** Request pending. */
  PENDING = "PENDING",

  /** Request resolved successfully. */
  SUCCESS = "SUCCESS",
}

/** Select fields */
export enum ESelectFields {
  country = "country",
  industry = "industry",
  region = "region",
}

/** Input fields */
export enum EInputFields {
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  jobTitle = "jobTitle",
  companyName = "companyName",
}

/** Policy fields */
export enum EPolicyFields {
  termPolicy = "termPolicy",
  newsletter = "newsletter",
}
