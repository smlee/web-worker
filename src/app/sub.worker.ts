/// <reference lib="webworker" />
let start;
function getStart(event) {
  console.log('get start', event)
  start = 1 * event;
  getEnd(event);
}

let end;
let bloop = 0;
function getEnd(event) {
  console.log('get end', event);
  end = 1 * event;
  onmessage = null;
  work();
}

function work() {
  for (let i = start; i < end; i++) {
    bloop += 1;
    console.log('bloop is', bloop);
  }
  console.log('result from work', bloop);
  postMessage(bloop);
  close();
}

addEventListener('message', ({ data }: {data: number}) => {
  getStart(data);
  console.log('testing sub worker')
  console.log('start', start);
  console.log('end', end);
});
