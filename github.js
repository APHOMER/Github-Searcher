class Github {
    constructor(){
        this.client_id = '9a5c92722fa3e7304ab1';
        this.client_secret = 'c156d39ae05b10e922a2378bd06e4bc8d602b10a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            // profile: profile; //same as the one below
            profile, 
            repos
        }
    }
}

// module.exports = Github;
// Client ID
// 9a5c92722fa3e7304ab1

 
    // CLIENT SECRET
//    c156d39ae05b10e922a2378bd06e4bc8d602b10a