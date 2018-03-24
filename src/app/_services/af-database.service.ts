import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class AfDatabaseService {

  constructor(private db: AngularFireDatabase) { }

  getProfile() {
  	return this.db.object('profile').valueChanges();
  }
}
