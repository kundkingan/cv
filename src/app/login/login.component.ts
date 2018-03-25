import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AfAuthService } from '../_services/af-auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AfAuthService]
})
export class LoginComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private afAuthService: AfAuthService,
    @Inject(MAT_DIALOG_DATA) public data: any)
  {
    this.afAuthService.getAuthState$.subscribe(user => {
      if (user) {
        this.dialogRef.close();
      }
    });
  }

  onLogin() {
    this.afAuthService.login();
  }

}
