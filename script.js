const shortBtn = document.getElementById("short-btn"); //Get the Shorten button
const reloadBtn = document.getElementById("reload-btn"); //Get the reload button

const shortenUrlTextare = document.getElementById("shortenUrlTextarea"); //Get the textarea where the shortened URL will be displayed

shortBtn.addEventListener("click", shortenUrl); //Add event listener to the shorten button to trigger URL shortening

function shortenUrl(){ //Function to shorten URL
    var originalUrl = document.getElementById("originalURL").value; //Retrieve the value from the URL input field
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl); //Build the APi URL with the ecoded URL
    fetch(apiUrl)
    .then((response) => response.text()) //Process the response as text
    .then((data) => {
        shortenUrlTextare.value=data; //Display the shortened URL in the textareas
    })
    .catch((error) => {
        shortenUrlTextare.value='Error: Unable to Shorten URL'; //Handle errors and update the textarea with error message
    });

    reloadBtn.addEventListener("click", () => {//Add event listener to the reload button to reload the page
        location.reload(); //Reload the page
    });
}