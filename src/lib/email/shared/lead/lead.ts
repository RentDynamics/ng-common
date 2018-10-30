import { Community } from '../community';
import { Person } from '../person';

export interface Lead {
    communityId: number;
    created: string;
    createdBy: number;
    id: number;
    community?: Community;
    person?: Person;
    personId?: number;
    modified?: string;
    modifiedBy?: number;
    unqualifiedReasonType?: number;
    noAppointmentReasonType?: number;
}