import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      // this is how we get the id from the url
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    //params here is an observable
    //every time params change, change user object
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.user.id = params['id'];
    //     this.user.name = params['name'];
    //   }
    // );

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  } //end onInit

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
