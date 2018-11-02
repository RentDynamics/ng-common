export class CommunityGroupModel {
  communities: any[] = [];

  constructor(args?: any) {
    for (let prop in args) {
      this[prop] = args[prop];
    }
  }
}
