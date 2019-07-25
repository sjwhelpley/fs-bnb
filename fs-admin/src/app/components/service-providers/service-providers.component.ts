import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model'
import { ServiceProviderService } from '../../services/service-provider.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss']
})
export class ServiceProvidersComponent implements OnInit {
  navItems: Array<any> = [
    {
      name: 'Home',
      route: '/home'
    },
    {
      name: 'Users',
      route: '/users'
    },
    {
      name: 'Service Providers',
      route: '/service-providers'
    },
    {
      name: 'Listings',
      route: '/listings'
    },
    {
      name: 'Booking Requests',
      route: '/booking-requests'
    }
  ];
  
  providers: User[];

  constructor( 
    private spService: ServiceProviderService,
    private router: Router
  ) {
    this.spService.getAll().then((spArr: any) => {
      this.providers = spArr;
    });
  }

  ngOnInit() {
  }

  navTo(page) {
    this.router.navigate([page.route]);
  }

}
