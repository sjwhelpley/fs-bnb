import { Component, OnInit } from '@angular/core';
import { GraphDataService } from '../../services/graph-data.service';
import { Graph } from '../../models/graph';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private graphDataService: GraphDataService,
    private router: Router
  ) { }

  rentalGraphOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  
  rentalGraphLabels: Array<string>;
  rentalGraphType = 'bar';
  rentalGraphLegend = true;
  rentalGraphData: any;
  guestBookingLength: Graph = new Graph();
  randomBookingLength: Graph = new Graph();

  ngOnInit() {
    let rentalData = this.graphDataService.getTotalMonthlyRental();
    this.rentalGraphLabels = rentalData.xAxis;
    this.rentalGraphData = [{
      data: rentalData.data,
      label: rentalData.label,
    }];
    this.guestBookingLength = this.updateGraph(this.graphDataService.getLengthOfGuestBookings(), 'pie', 'Guest Booking Length');
    this.randomBookingLength = this.updateGraph(this.graphDataService.getRandomMonthlyBookingPieChart(), 'pie', 'Random Guest Booking Length');
  }

  updateGraph(data, type, title){
    let graph = new Graph();
    graph.data = [];
    graph.data.push(data);
    graph.labels = data.xAxis;
    graph.type = type;
    graph.title = title;
    return graph;
  }

  chartClicked({ event, active }: { event: MouseEvent, active: any[] }): void {
    let index = (active[0]._index);
    let field = this.randomBookingLength.labels[index];
    console.log(index);
    console.log(field);
    this.router.navigate(["sub-graph/" + field]);
  }  
}
