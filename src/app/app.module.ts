import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule } from '@angular/router';

const appRoutes: Routes=[
  {
    path: '', 
    component: HomeComponent 
  },
  {
    path: 'users', //the path is what you see after / - so it would be localhost:4200/users
    component: UsersComponent // when visiting users path, load users component
  },
  {
    /*
      colon just says its dynamic and then in the component you can look for the word 'id'
      doesn't have to be id - this is just a name, we can call it name, username, etc - anything we want
    */
    path: 'users/:id/:name', 
    component: UserComponent 
  },
  {
    path: 'servers', 
    component: ServersComponent 
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //adding routing functionality to app
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
