// import { Role } from './role';
export interface User {
    _id?: string;
    email: string;
    password: string;
    personId: string;
    person: any;
    corporateOrganisationId: string;
    passwordToken: string;
}

export interface CurrentUser{
    _id: string;
    roles:[any];
    resources:[any];
}
