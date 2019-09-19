/// <reference lib="webworker" />
var num_workers = 10;
var items_per_worker = 1000000;

var result = 0;
var pending_workers = num_workers;
addEventListener('message', ({ data }) => {
  console.log('testing webworker')
  for (let i = 0; i < num_workers; i += 1) {
    let worker = new Worker('./sub.worker.js', {type: 'module'});
    worker.postMessage(i * items_per_worker);
    worker.postMessage((i + 1) * items_per_worker);
    worker.onmessage = storeResult;
    console.log('deploying sub workers', data);
    console.log('result', result);
    console.log('pending workers', num_workers);
  }
});

function storeResult(event) {
  console.log('data from sub workers', event)
  result += 1*event.data;
  pending_workers -= 1;

  if(pending_workers <= 0) {
    postMessage(result);
  }
}
