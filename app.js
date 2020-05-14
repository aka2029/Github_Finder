// This is controlling everything related to JS

// Init Github
const github = new Github();
// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  if (userText != "") {
    // Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
