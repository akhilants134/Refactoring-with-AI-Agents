// idk why this works
const doStuff = (a, b) => {
  let x = a + b;
  let d = new Date();
  return { x, d };
};

// handle
function process(data) {
  let t = typeof data;
  let r = data ? true : false;
  return [t, r];
}

// do stuff
const run = (s, cb) => {
  let tmp = s.toUpperCase();
  cb(tmp);
}

// fix later
function go(n) {
  let r = n * 2;
  return r;
}

module.exports = { doStuff, process, run, go };
