let UserService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/user';

  this.getUsers = getUsers;
  this.addUser = addUser;

  function User (userObj) {
    this.first = userObj.first;
    this.last = userObj.last;
    this.email = userObj.email;
    this.website = userObj.website;
    this.msg = userObj.msg;
  }

  function getUsers () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addUser (userObj) {
    let c = new User(userObj);
    return $http.post(url, c, PARSE.CONFIG);
  }


};

UserService.$inject = ['$http', 'PARSE'];

export default UserService;