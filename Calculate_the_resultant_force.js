// -------------------------------------------- Description ---------------------------------------

// Given two forces (F1 and F2 ) and the angle F2 makes with F1 find the resultant force R and the angle it makes with F1.

// input
// Three values :

// F1
// F2 making an angle θ with F1
// angle θ
// output
// An array consisting of two values :

// R (the resultant force)
// angle R makes with F1 (φ)
// notes
// Units for each of the following are given as under :

// F1 = Newton
// F2 = Newton
// angle θ = degree
// R = Newton
// φ = degree

// ------------------------------------------------------------------------------------------------

const solution = (force1, force2, theta) => {
  // Convert angle from degrees to radians
  var thetaRad = (theta * Math.PI) / 180;

  // Calculate the components of force2
  var force2x = force2 * Math.cos(thetaRad);
  var force2y = force2 * Math.sin(thetaRad);

  // Calculate the components of R
  var Rx = force1 + force2x;
  var Ry = force2y;

  // Calculate the magnitude of R
  var R = Math.sqrt(Rx * Rx + Ry * Ry);

  // Calculate the angle phi (angle between R and F1)
  var phiRad = Math.atan2(Ry, Rx);
  var phi = (phiRad * 180) / Math.PI;

  // Return the resultant force R and angle phi
  return [R, phi];
};
