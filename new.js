

function a() {
  console.log("Hi, a function is called");
}

var b = function () {
  console.log("Hi, b function is called");
  console.log(b);
};

a();
b();
// {
//   const hourNow = new Date().getHours();
//   console.log(hourNow);
// }
