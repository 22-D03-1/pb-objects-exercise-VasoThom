//1

//const data = { a: 1 };
const data = [1, 2, 3];

function isPlainObject(val) {
  if (!val) return false;
  let proto = Object.getPrototypeOf(val);
  return proto == Object.prototype || proto == null;
}

console.log(isPlainObject(data)); // true
