function getRepo(userHandle) {
  fetch(`https://api.github.com/users/${userHandle}/repos`)
    .then((res) => res.json()) //format response as JSON
    .then((responseJson) => displayResults(responseJson)); //log response to console
}
function watchForm() {
  $("form").submit((e) => {
    e.preventDefault();
    const userHandle = $(".user-handle").val(); //captures value of user's input
    getRepo(userHandle);
    displayResults();
  });
}

function displayResults(responseJson) {
  $("#results-list").empty();
  for (let i = 0; i < responseJson.message.length; i++) {
    $("#results-list").append(`<p>${responseJson[i]}</p>`);
    $("#results").removeClass("hidden");
  }
}

$(watchForm);
