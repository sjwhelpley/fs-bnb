import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { GraphDataService } from '../../services/graph-data.service';
import { Graph } from '../../models/graph';

@Component({
  selector: 'app-sub-graph',
  templateUrl: './sub-graph.component.html',
  styleUrls: ['./sub-graph.component.scss']
})
export class SubGraphComponent implements OnInit {
  field: string;
  guestMonthlyBooking: Graph = new Graph();

  constructor(
    private graphDataService: GraphDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.field = params['field'];
    });
    this.guestMonthlyBooking = this.updateGraph(this.graphDataService.getRandomAnnualBooking(this.field), 'bar', ('Random Guest Booking'));
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

}
