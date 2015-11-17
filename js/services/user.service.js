let UserService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/user';

  this.getUsers = getUsers;
  this.addUser = addUser;

  function Car (userObj) {
    this.name = userObj.make;
    this.email = userObj.email;
    this.website = userObj.website;
    this.msg = userObj.msg;
  }

  function getUsers () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addUser (userObj) {
    let c = new Car(userObj);
    return $http.post(url, c, PARSE.CONFIG);
  }


};

UserService.$inject = ['$http', 'PARSE'];

export default UserService;