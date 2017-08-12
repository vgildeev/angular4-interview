import { Injectable } from '@angular/core';

import { Profile } from '../models';
import ProfilesMocks from '../mocks/profiles.mock';

@Injectable()
export class ProfilesService {

  constructor() {}

  getProfileByUserName(name: string): Promise<any> {
    let matchedProfiles = ProfilesMocks.filter(p => p.nickname.toLowerCase().includes(name.toLowerCase()));
    if (matchedProfiles.length) return Promise.resolve(matchedProfiles[0]);
    else return Promise.reject(false);
  }

  getProfileById(id: string): Promise<any> {
    let profile = ProfilesMocks.find(p => p.id === id);
    if (profile) return Promise.resolve(profile);
    else return Promise.reject(false);
  }
}
