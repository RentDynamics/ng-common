import { Community } from '../community';

export interface CommunityGroup {
    id: number;
    name: string;
    timeZoneType: any;
    client: any;
    callRoutingLocation: string;
    textmsgitAccount: number;
    communityGroupDayOfWeekHours?: any[];
    communityGroupBlockedApptTimes?: any[];
    emailAccount: number;
    emailMsgItAdsourceTracking?: { id: number, adsourceId: number, phoneNumber: string, email: string };
    primaryAreaCode: string;
    secondaryAreaCode: string;
    blockedApptTime?: any;
    communities?: Community[];
    phone?: any;
    defaultTextingNumber?: any;
    communityGroupPhones?: any[];
}