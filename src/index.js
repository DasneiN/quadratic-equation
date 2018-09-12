module.exports = function solveEquation(equation) {
  let items = equation.split(" "),
      a = parseInt(items[0]),
      b = parseInt(items[3] + items[4]),
      c = parseInt(items[7] + items[8]);
      
  let solution_1 = Math.round((-1 * b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)),
      solution_2 = Math.round((-1 * b - Math.sqrt(b * b - 4 * a * c)) / (2 * a));

  return ( solution_1 < solution_2 ? [solution_1, solution_2] : [solution_2, solution_1] );
  
}
