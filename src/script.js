function displaySong(response) {
  new Typewriter("#salsa-song", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}

function generateSong(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let key = "0be192793f55aa475o5602t2cabd6e24";
  let prompt = `User Instructions: Generate a song about feeling ${instructionsInput.value}`;
  let context =
    "You are a salsa singer and songwriter who can come up with incredibly good lyrics from just one feeling. Your mission is to only generate a song in basic HTML following the user instructions in a <p> and separate each line with <br />. No need to add a song title.";
  let urlApi = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let salsasongElement = document.querySelector("#salsa-song");
  salsasongElement.classList.remove("hide");
  salsasongElement.innerHTML = `<div class="generating">Generating a song for you about ${instructionsInput.value} 💃🏻</div>`;

  axios.get(urlApi).then(displaySong);
}

let songElement = document.querySelector("#song-generator");
songElement.addEventListener("submit", generateSong);
