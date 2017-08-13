import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProfilesService } from '../../shared/services';
import { Profile } from '../../shared/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  perPage: number = 10;
  paginateFrom: number = 0;
  paginateTo: number = this.perPage;
  currentPage: number = 1;
  totalPages: number;

  constructor(
    private profilesService: ProfilesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.profilesService.getProfileById(params.id)
        .then((profile: Profile) => {
          this.profile = profile;
          this.totalPages = Math.ceil(profile.repositories.length / this.perPage);
        })
        .catch(err => this.router.navigate(['/home']))
    );
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
      this.paginateFrom = (this.currentPage - 1) * this.perPage;
      this.paginateTo = this.currentPage * this.perPage;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.paginateFrom = (this.currentPage - 1) * this.perPage;
      this.paginateTo = this.currentPage * this.perPage;
    }
  }
}
