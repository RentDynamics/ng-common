export class EmailVM {
	html: string = null;
	isHTML: boolean = null;
	subject: string = null;
	recipients: Array<string> = null;
	communityID: number = null;
	communityGroupID: number = null;
	from: string = null;
	existingContactID: number = null;
	awsAttachmentIDs: Array<number> = null;
	postmarkMessageID: string = null;
	senderDisplayName: string = null;
}