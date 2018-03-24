import { Component } from '@angular/core';
import { AfDatabaseService } from './_services/af-database.service';
import { AfStorageService } from './_services/af-storage.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

import { Profile } from './profile.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AfDatabaseService, AfStorageService]
})
export class AppComponent {

	profile: Profile;
	profileUrl: Observable<string | "">;

  constructor(private afDatabaseService: AfDatabaseService, private afStorageService: AfStorageService) {
  }

  ngOnInit() {
  	this.afDatabaseService.getProfile().subscribe(profile => this.handleProfile(profile))

  	this.profileUrl = this.afStorageService.getProfilePic();
  }

  private handleProfile(profile) {
  	console.log(profile)
  	this.profile = profile;
  }
}
