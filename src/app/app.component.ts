import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  items: FirebaseListObservable<any[]>;
  msgVal = '';

  constructor(public af: AngularFireDatabase) {
    this.items = af.list('/itens', {
      query: {
        limitToLast: 50
      }
    });
  }
}
