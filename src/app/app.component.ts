import { Component } from '@angular/core';

import { WebWorkerService } from './services/webworker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WebWorkerService]
})
export class AppComponent {
  title = 'web-workers';

  constructor(
    private webWorkerService: WebWorkerService
  ) {

  }

  runWorkers() {
    console.log('trying to run web workers')
    this.webWorkerService.startWebWorker();
  }
}
