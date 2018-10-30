import { EmailAddress } from '../email-address';

export interface Person {
    created: string;
    dob?: string;
    emailAddress?: EmailAddress;
    firstName: string;
    firstNameSx?: string;
    id: number;
    lastName: string;
    lastNameSx?: string;
    maidenName?: string;
    middleName?: string;
    ssn?: string;
    personBulkEmailMessages?: any[];
    leads?: any[];
    residents?: any[];
}