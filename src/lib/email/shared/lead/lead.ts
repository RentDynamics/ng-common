import { Community } from '../community/community';
import { Person } from '../person/person';

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