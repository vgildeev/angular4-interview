import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ProfilesService } from '../../shared/services';
import { Profile } from '../../shared/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Profile;

  constructor(
    private profilesService: ProfilesService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.profilesService.getProfileById(params.id)
        .then((profile: Profile) => this.profile = profile)
        .catch(err => console.log(err))
    );
  }

}
