const colorBox = document.querySelector("#color-box");
// JS for the gray button
const grayButton = document.querySelector("#gray-button");
grayButton.addEventListener("click", function () {
  colorBox.className = "gray";
});
// JS for the blue button
const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", function () {
  colorBox.className = "blue";
});
/* TODO 1
 *
 * Add the JS for the pink button
 *
 */
// JS for the pink button
const pinkButton = document.querySelector("#pink-button");
pinkButton.addEventListener("click", function () {
  colorBox.className = "pink";
});
let count = 0;
const countspan = document.querySelector("#countspan");
const counterButton = document.querySelector("#counter-button");
counterButton.addEventListener("click", function () {
  /* TODO 2
   *
   * Fill in this function so that it increments
   * (adds one to) the variable named count,
   * then updates the inner text of "countspan"
   * to show the current value of "count".
   */
  console.log("fabulous button has been clicked");
  let newCounterValue = Number(countspan.innerHTML) + 1;
  countspan.innerHTML = newCounterValue;
});
const evenOrOddButton = document.querySelector("#even-or-odd-button");
evenOrOddButton.addEventListener("click", function () {
  /* TODO 3
   *
   * Fill in this function so that it shows an
   * alert dialog stating whether the count variable
   * (from part 2, above) is even or odd.
   */
  const countspan = document.querySelector("#countspan");
  let newCounterValue = Number(countspan.innerHTML);
  countspan.innerHTML = newCounterValue;
  document.body.innerHTML +=
    "<br>" + "The count equals " + newCounterValue + "<br>";
  if (newCounterValue % 2 == 0) {
    document.body.innerHTML += "The count is even!";
  } else {
    document.body.innerHTML += "The count is odd!";
  }
});
