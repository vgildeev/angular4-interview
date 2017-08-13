import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { ProfilesService, ModalsService } from 'shared/services';
import { Profile } from 'shared/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('modalAlert') modal: TemplateRef<any>;
  term: string;

  constructor(
    private router: Router,
    private profilesService: ProfilesService,
    private modalsService: ModalsService,
  ) {}

  ngOnInit() {}

  searchProfile(term: string) {
    if (term) {
      this.profilesService.getProfileByUserName(term).then((profile: Profile) => {
        this.router.navigate(['/profiles', profile.id]);
        this.term = '';
      }).catch(err => this.openModal(this.modal));
    }
  }

  openModal(content) {
    this.modalsService.open(this.modal);
  }

  closeModal() {
    this.modalsService.close();
  }
}
