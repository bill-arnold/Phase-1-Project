// Get the button element with ID "getbtn"
const btn = document.getElementById("getbtn");

// Get the quote element with ID "quote"
const QuoteElem = document.getElementById("quote");

// Fetch a random quote from the Quotable API
const fetchData = async () => {
  QuoteElem.innerHTML = `<p>Loading...</p>`;
  // Send a request to the Quotable API to get a random quote
  let data = await fetch("https://api.quotable.io/random");

  // Parse the response as JSON
  let json = await data.json();

  // Set the text of the quote element to the content of the fetched quote
  QuoteElem.innerHTML = `<p>${json.content}</p>`;
};

// Add an event listener to the button element that triggers the fetchData function when clicked
btn.addEventListener("click", fetchData);

// Call the fetchData function once to initially populate the quote element with a random quote
fetchData();
// Print the specific quotes generated
function printCurrentPage() {
    window.print();
}

// Selecting necessary DOM elements
const captchaTextBox = document.querySelector(".captch_box input"); // Input field where the generated captcha will be displayed
const refreshButton = document.querySelector(".refresh_button"); // Button to refresh the captcha
const captchaInputBox = document.querySelector(".captch_input input"); // Input field for the user to enter the captcha
const message = document.querySelector(".message"); // Element to display the validation message
const submitButton = document.querySelector(".button"); // Submit button to validate the entered captcha

// Variable to store the generated captcha
let captchaText = null;

// Function to generate the captcha
const generateCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 7); // Generate a random string
  const randomStringArray = randomString.split("");
  const changeString = randomStringArray.map((char) =>
    Math.random() > 0.5 ? char.toUpperCase() : char
  ); // Randomly change some characters to uppercase
  captchaText = changeString.join("   "); // Join the characters with spaces for a spaced-out appearance
  captchaTextBox.value = captchaText; // Display the generated captcha in the input field
  console.log(captchaText);
};

const refreshBtnClick = () => {
  generateCaptcha(); // Refresh the captcha when the refresh button is clicked
  captchaInputBox.value = ""; // Clear the user input field
  captchaKeyUpValidate();
};

const captchaKeyUpValidate = () => {
  // Toggle the "disabled" class on the submit button based on whether the captcha input field is empty or not
  submitButton.classList.toggle("disabled", !captchaInputBox.value);

  if (!captchaInputBox.value) message.classList.remove("active"); // Hide the validation message if the captcha input field is empty
};

// Function to validate the entered captcha
const submitBtnClick = () => {
  captchaText = captchaText
    .split("")
    .filter((char) => char !== " ")
    .join(""); // Remove spaces from the stored captcha for validation
  message.classList.add("active"); // Show the validation message

  // Check if the entered captcha text is correct or not
  if (captchaInputBox.value === captchaText) {
    message.innerText = "Entered captcha is correct"; // Display success message
    message.style.color = "#222620"; // Dark green color for success message
  } else {
    message.innerText = "Entered captcha is not correct"; // Display error message
    message.style.color = "#FF2525"; // Bright red color for error message
  }
};

// Add event listeners for the refresh button, captchaInputBox, submit button
refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

// Generate a captcha when the page loads
generateCaptcha();

document.addEventListener('DOMContentLoaded', function () {
  // ... existing JavaScript ...

  // Show the overlay on page load
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'flex';

  // You can use this function to show the quote generator when the captcha is correct
  window.showQuoteGenerator = function () {
      overlay.style.display = 'none';
      const quoteGenerator = document.getElementById('quote-generator');
      quoteGenerator.style.display = 'block';
  };

  // ... existing JavaScript ...
});

// ... existing JavaScript ...
