const clicks = fromEvent(document, 'click');
const ones = clicks.pipe(mapTo(1));
const seed = 0;
const count = ones.pipe(scan((acc, one) => acc + one, seed));
count.subscribe(x => console.log(x));

// 1
// 2
// 3
// 4
// and so on
