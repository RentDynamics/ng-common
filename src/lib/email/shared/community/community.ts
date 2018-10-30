export interface Community {
    id: number;
    address?: any;
    client?: any;
    name: string;
    phoneticName: string;
    abbreviatedName: string;
    totalUnitCount: number;
    yearBuilt: number;
    floorCount: number;
    latitude: number;
    longitude: number;
    website: string;
    communityGroupId: number;
    outboundEmailAddress: string;
    useHotSheetPricing: boolean;
    manualSubscription: boolean;
}