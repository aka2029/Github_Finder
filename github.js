// isne sirf user laake dedia back me, iska kaam khatam
class Github {
  constructor() {
    this.client_id = "84f6b0d54f6499419847";
    this.client_secret = "414549b99f77ffabb9782e7b5284428c93237cf2";
  }

  async getUser(user) {
    // similar to XMLHTTPRrequest() version 3 where we use promises with async await
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    ); //after url the clientid and client secret has to be added, ? is added to add a client id And & to add client secret

    const profile = await profileResponse.json();

    return {
      // i dont just want to return profile data. im gonna return object. im gonna return repos from here as well. This is what is great about promises in using async await as opposed to callbacks. If i use callback im supposed to have one callback get the response then have another one with getting the repos

      profile
    };
  }
}
