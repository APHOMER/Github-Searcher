// const Github = require('./github');
// const UI = require('./ui');

// initialize Gighub
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    //Get input text 
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
            .then(data => {
                // console.log(data);
                if(data.profile.message === 'Not Found'){
                    // Show alert
                    ui.showAlert('User not Found', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }
});

