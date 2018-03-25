import { Component } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AfDatabaseService } from './_services/af-database.service';
import { AfStorageService } from './_services/af-storage.service';

import { Profile } from './profile.interface';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AfDatabaseService, AfStorageService]
})
export class AppComponent {

	profile: Profile;
	profileUrl: Observable<string>;

  constructor(
    private afDatabaseService: AfDatabaseService,
    private afStorageService: AfStorageService,
    public dialog: MatDialog)
  {

  }

  ngOnInit() {
  	this.afDatabaseService.getSampleProfile()
    .subscribe(profile => this.handleProfile(profile))
  	this.profileUrl = this.afStorageService.getProfilePic();
  }

  onEdit() {
    this.dialog.open(LoginComponent)
  }

  private handleProfile(profile) {
  	this.profile = profile;
  }
}
