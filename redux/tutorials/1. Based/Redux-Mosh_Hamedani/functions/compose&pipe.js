import { compose, pipe } from 'lodash/fp'

let input = "   JavaScript  ";
let output = "<div>" + input.trim() + "</div";

const trim = str => str.trim();
//const wrapInDiv = str => `<div> ${str}</div>`;
const wrap = type => str => `<${type}> ${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

// We need to read the function from right to left
//const result = wrapInDiv(toLowerCase(trim(input)));

// Same as above, but more eye friendly by using loadsh but still the function has to we read from right to left
//const transform1 = compose(wrapInDiv, toLowerCase, trim);
//transform1(input);

// With (pipe) we can read the function from left to right with is more familiar with our reading behaviours
//const transform2 = pipe(trim, toLowerCase, wrapInDiv);

// This way we can dynamically from div, span, or any other way to wrap our elements
const transform2 = pipe(trim, toLowerCase, wrap("span"));

console.log(transform2(input));