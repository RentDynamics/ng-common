export interface EmailMessage {
    id: number;
    body?: string;
    subject?: string;
    contactDirection: number;
    html: boolean;
    sentReceivedDate?: string;
    communityGroupId?: number;
    postmarkMessageId?: string;
    primaryPostmarkMessageId?: string;
    spam: boolean;
    sender: string;
    senderDomain: string;
    recipient?: string;
    adSourceId?: number;
    communityId?: number;
    emailMessageTypeId?: number;
    emailMessageType?: any;
    autoPushToPmSystem: boolean;
    taskId?: number;
}