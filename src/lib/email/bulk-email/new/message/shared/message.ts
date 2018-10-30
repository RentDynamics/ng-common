import { Footer } from './footer';

export interface Message {
  logoUrl: string;
  photoUrl: string;
  body: string;
  subject: string;
  callToAction: { title: string; value: string };
  callToActionCommunityId?: number;
  fileRelationType: any;
  footer: Footer;
}
