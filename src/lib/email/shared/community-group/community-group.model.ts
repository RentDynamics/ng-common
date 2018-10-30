import { Community } from '../community';
import { CommunityGroup } from './community-group';

export class CommunityGroupModel {
    communities: Community[] = [];

    constructor(args?: CommunityGroup) {
        for(let prop in args)
            this[prop] = args[prop]
    }
}
