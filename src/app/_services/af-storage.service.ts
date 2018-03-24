import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class AfStorageService {

  constructor(private storage: AngularFireStorage) { }

  getProfilePic() {
		return this.storage.ref('pic.jpg').getDownloadURL();
  }
}
