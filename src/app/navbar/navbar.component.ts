import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProfilesService } from '../../shared/services';
import { Profile } from '../../shared/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private profilesService: ProfilesService,
  ) {}

  ngOnInit() {}

  searchProfile(term: string) {
    this.profilesService.getProfileByUserName(term).then((profile: Profile) => {
      this.router.navigate(['/profiles', profile.id]);
      this.term = '';
    });
  }
}
