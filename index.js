// EXAMPLE 1 - Compare two Time strings formatted as HH:MM:SS in JS

const time1 = '07:30:24';
const time2 = '10:45:33';

if (time1 > time2) {
  console.log('time1 is greater than time2');
} else if (time2 > time1) {
  // ✅ this runs
  console.log('time2 is greater than time1');
} else {
  console.log('time1 is equal to time2');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Compare two Time strings formatted as HH:MM:SS using Date() constructor

// const time1 = '07:30:24';
// const time2 = '10:45:33';

// const [hours1, minutes1, seconds1] = time1.split(':');

// const [hours2, minutes2, seconds2] = time2.split(':');

// const date1 = new Date(
//   2022,
//   0,
//   1,
//   +hours1,
//   +minutes1,
//   +seconds1,
// );
// const date2 = new Date(
//   2022,
//   0,
//   1,
//   +hours2,
//   +minutes2,
//   +seconds2,
// );

// if (date1.getTime() > date2.getTime()) {
//   console.log('time1 is greater than time2');
// } else if (date2.getTime() > date1.getTime()) {
//   // ✅ this runs
//   console.log('time2 is greater than time1');
// } else {
//   console.log('time1 is equal to time2');
// }
