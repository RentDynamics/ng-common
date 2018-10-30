import { Message } from './message';
import { Footer } from './footer';

export interface Validation {
  isValid();
  getValidationMsg();
}

export class MessageModel implements Message, Validation {
  // TODO: Fix this
  unsubscribeUrl: string = 'https://dev.rentdynamics.com/src/assets/public/unsubscribe.html';
  logoUrl: string = null;
  photoUrl: string = null;
  body: string = null;
  subject: string = null;
  callToAction: { title: string; value: string } = null;
  callToActionCommunityId: number = null;
  selectedCommunityId: number;
  fileRelationType: any;
  footer: Footer = {
    name: null,
    phone: null,
    address: {
      addressLine1: null,
      addressLine2: null,
      city: null,
      state: {
        abbreviation: null
      },
      zip: null
    },
    communityGroupDayOfWeekHours: [],
    communityId: null,
    showAdaLogo: false
  };

  isValid() {
    return (
      !this.isNullOrWhitespace(this.body) &&
      !this.isNullOrWhitespace(this.subject)
    );
  }

  isNullOrWhitespace(str: string) {
    return str === null || str.match(/^ *$/) !== null;
  }

  getValidationMsg() {
    let errors = [];
    if (this.isNullOrWhitespace(this.subject))
      errors.push('Subject is required');
    if (this.isNullOrWhitespace(this.body))
      errors.push('Message content is required');
    return errors.join(', ');
  }
}
