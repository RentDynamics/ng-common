import {Injectable} from '@angular/core';

@Injectable()
export class AuthStubService {

    constructor() {

    }

    getAuthHeaders() {
        return {};
    }

    login() {
        return new Promise((pass, fail) => { pass({authToken: 'anlkjsdnflkj'}); });
    }

    logout() {
        return true;
    }

    isAuthenticated() {
        return true;
    }
}
