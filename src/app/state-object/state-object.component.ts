import {Component, OnInit} from '@angular/core';
import {ConstellationService} from '../constellation.service';

// declare var ngConstellation: any;
// declare var $: any;

@Component({
  selector: 'app-state-object',
  templateUrl: './state-object.component.html',
  styleUrls: ['./state-object.component.css']
})
export class StateObjectComponent implements OnInit {

  constructor(constellationService: ConstellationService) {
    constellationService.initializeClient('http://89.80.6.1:8088', '881863589a9ba4cf53a1d5e0d00d649e8cb1dca5', 'readOnly');
  }



  ngOnInit() {

    // constellationService....

    // ngConstellation.initializeClient('http://89.80.6.1:8088', '881863589a9ba4cf53a1d5e0d00d649e8cb1dca5', 'readOnly');
    // ngConstellation.onConnectionStateChanged(function (change) {
    //   if (change.newState === $.signalR.connectionState.connected) {
    //     console.log('connected');
    //
    //     ngConstellation.registerStateObjectLink('*', '*', 'lampe%', '*', function (so) {
    //       // Code B
    //       debugger;
    //     });
    //
    //
    //     /*constellation.registerStateObjectLink('*', 'Vera', 'lampe salon', '*', function (so) {
    //      $scope.$apply(function () {
    //      debugger;
    //      $scope.LampeSalon = so.Value.Level;
    //      });
    //      });*/
    //
    //
    //   }
    // });
  }

}
