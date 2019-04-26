// join.js

// here's some WIP cartesian join JS from a code example & stackoverflow
// JS Bin : https://jsbin.com/xiqogosezu/edit?js,console
// Stack Overflow : https://stackoverflow.com/a/43053803

let f = (a, b) => [].concat(...a.map(a => b.map(b => [].concat(a, b))));
let cartesian = (a, b, ...c) => b ? cartesian(f(a, b), ...c) : a;

const styles = [
  'Harsh',
  'Ritual',
  'Dark',
  'Hardcore',
  'Minimal',
];

const genres = [
  'Acid',
  'Ambient',
  'Breaks',
  'EBM',
  'Electro',
  'IDM',
  'Industrial',
  'Noise',
  'Techno',
];

// List of immutable genres, ie: "Powernoise" or "Shoegaze"
let genresList = [
	'Powernoise',
];

genresList = genresList.concat( cartesian( style, genre ) );
genresList = genresList.concat( cartesian( genre, genre ) );

console.log(genresList);
