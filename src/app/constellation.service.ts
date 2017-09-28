import {Component, OnInit, NgZone, Injectable} from '@angular/core';
import {
  HubService,
  Hub,
  HubSubscription,
  HubWrapper
} from 'ngx-signalr-hubservice';

import 'rxjs/add/operator/toPromise';

const url = 'http://localhost:64339/signalr';

@Injectable()
@Hub({hubName: 'consumerHub'})
export class ConstellationService implements OnInit {

  private hubWrapper: HubWrapper;

  connecting = false;
  connected = false;
  sending = false;
  enteredName = false;

  name = '';
  message = '';

  messages = <[ { name: string, message: string } ]> [];

  constructor(private hubService: HubService, private ngZone: NgZone) {
    this.hubWrapper = hubService.register(this);
  }

  async ngOnInit() {
    this.connecting = true;
    this.connected = await this.hubService.connect(url).toPromise();
    this.connecting = false;
  }

  async sendMessage() {
    this.sending = true;
    await this.hubWrapper.invoke('sendMessage', this.name, this.message).toPromise();
    this.message = '';
    this.sending = false;
  }

  @HubSubscription()
  receiveMessage(name: string, message: string) {
    // run inside zone to update UI
    this.ngZone.run(() => {
      this.messages.push({ name: name, message: message });
    });
  }


  createConstellationConsumer = function (serverUri, accessKey, friendlyName) {
    signalR.consumerHub = $.hubConnection(serverUri, {
      useDefaultPath: true,
      qs: {
        "SentinelName": "Consumer",
        "PackageName": friendlyName,
        "AccessKey": accessKey
      }
    });
    $.extend(signalR, signalR.consumerHub.createHubProxies('consumerHub'));
    return signalR.Consumer;
  };
}


