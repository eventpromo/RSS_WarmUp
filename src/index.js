module.exports = function warmup(temperature) {
  var coef = 9/5;
  var add = 32;

  return temperature * coef + add;
};
