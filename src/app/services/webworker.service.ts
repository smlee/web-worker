import { Injectable } from '@angular/core';

@Injectable()
export class WebWorkerService {
  startWebWorker() {
    if (typeof Worker !== undefined) {
      console.log('creating dedicated worker')
      var worker = new Worker('../dedicated.worker', { type: 'module' });
      worker.onmessage = (event) => {
        console.log('got something from webworker', event.data)
        document.getElementById('result').textContent = event.data;
      };
      worker.postMessage('');
    }
  }
}
