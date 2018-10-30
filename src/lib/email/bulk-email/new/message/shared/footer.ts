export interface Footer {
    name: string;
    phone: string;
    address: {
      addressLine1: string;
      addressLine2: string;
      city: string;
      state: {
          abbreviation: string
      };
      zip: number;
    };
    communityGroupDayOfWeekHours: Object[];
    communityId?: number;
    showAdaLogo?: boolean;
}
