import { Inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'callCenterAgentDisplay'
})
export class CallCenterAgentDisplayPipe implements PipeTransform {

  get defaultResult(){
    return String();
  }

  constructor(@Inject('AgentService') private agentSvc: any,
    @Inject('SessionService') private sessionSvc: any) {

  }

  transform(value: any, args?: any): any {
    return this.callCenterAgentDisplayFilter(value);
  }

  callCenterAgentDisplayFilter(nameStringOrBaseAgentViewModel) {
    let result = this.defaultResult;
    if (typeof nameStringOrBaseAgentViewModel == 'string'){
      result = this.filterByNameString(nameStringOrBaseAgentViewModel);
    } else if (nameStringOrBaseAgentViewModel instanceof Object) {
      result = this.filterByBaseAgentViewModel(nameStringOrBaseAgentViewModel);
    }
    return result;
  }

  filterByBaseAgentViewModel(baseAgentViewModel) {
    let result = baseAgentViewModel.firstNameLastInitial || this.defaultResult;
    if (this.isSuperUser() && this.isCallCenterAgentBaseViewModel(baseAgentViewModel)){
      result = this.getLogoHtml() + ' ' + baseAgentViewModel.firstNameLastInitial;
    } else if (!this.isSuperUser() && this.isCallCenterAgentBaseViewModel(baseAgentViewModel)) {
      result = 'Rent Dynamics';
    }
    return result;
  }

  filterByNameString(strName) {
    let result = strName || this.defaultResult;
    if (this.isSuperUser() && this.isCallCenterAgentNameString(strName)) {
      result = this.getLogoHtml() + ' ' + strName;
    } else if (!this.isSuperUser() && this.isCallCenterAgentNameString(strName)) {
      result = 'Rent Dynamics';
    }
    return result;
  }

  getLogoHtml() {
    return String('<i class="stream stream-rd"></i>');
  }

  isCallCenterAgentNameString(strName) {
    return strName.toLowerCase().indexOf('cc-') > -1;
  }

  isCallCenterAgentBaseViewModel(baseAgentViewModel) {
    return baseAgentViewModel && baseAgentViewModel.firstNameLastInitial &&
      (baseAgentViewModel.roleID && baseAgentViewModel.roleID === this.agentSvc.roleTypeEnum.CallCenterAgents || 
        baseAgentViewModel.role && baseAgentViewModel.role.roleId === this.agentSvc.roleTypeEnum.CallCenterAgents);
  }

  isSuperUser() {
    var agent = this.sessionSvc.getAgent();
    if (agent.role.roleId && this.agentSvc.roleTypeEnum.SuperUsers) {
      return agent.role.roleId === this.agentSvc.roleTypeEnum.SuperUsers;
    }
    return false;
  }

}
