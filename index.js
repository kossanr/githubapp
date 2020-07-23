const header = {};

function getRepo(userHandle) {
  fetch(`https://api.github.com/users/${userHandle}/repos`)
    .then((res) => res.json()) //format response as JSON
    .then((responseJson) => console.log(responseJson)); //log response to console

  function watchForm() {
    $("form").submit((e) => {
      event.preventDefault();
      const userHandle = $(".user-handle").val(); //captures value of user's input
      getRepo(userHandle);
    });
  }
}
$(getRepo); //returns JSON object
