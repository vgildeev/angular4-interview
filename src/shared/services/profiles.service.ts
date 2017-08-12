import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

@Injectable()
export class ProfilesService {

  constructor() {}

  getProfileByUserName(name: string) {
    return Promise.resolve([]);
  }
}
