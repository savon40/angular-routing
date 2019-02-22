import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute, //need this to get access to the url
    private router: Router //need this to navigate
  ) { }

  ngOnInit() {
    //the + casts the id as a number so its not treated as a string
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params : Params) => {  
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  editServer() {
    //we can use relative path because we are already on server/:id
    this.router.navigate(['edit'], {relativeTo: this.route}); 
  }

}
