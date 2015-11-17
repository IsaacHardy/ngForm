let AddController = function(UserService) {
  
  let vm = this;

  vm.addUser = addUser;

  function addUser (userObj) {
    UserService.addUser(userObj).then( (res) => {
      console.log(res);
    });
  }

};

AddController.$inject = ['UserService'];

export default AddController;