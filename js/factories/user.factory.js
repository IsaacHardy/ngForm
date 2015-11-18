let UserFactory = function($rootScope) {
  
  let userObject = {};

  userObject.people = [];

  userObject.addPeople = (person) => {
    userObject.people.push(person);
    return userObject.people;
  };

};

UserFactory.$inject = ['$rootScope'];

export default UserFactory;