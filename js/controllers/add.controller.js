import $ from 'jquery';

let AddController = function(UserService, $scope, $state) {
  
  let vm = this;

  let first = {name: 'first'};
  let last = {name: 'last'};
  let email = {name: 'email'};
  let web = {name: 'web'};
  let msg = {name: 'msg'};

  vm.addUser = addUser;


  function addUser (userObj) {
    if (first.check && last.check && email.check && web.check && msg.check) {
      UserService.addUser(userObj).then( (res) => {
        $state.go('root.user');
      });
    } else {
      let array = [first, last, email, web, msg];
      
      $.each(array, function() {
        $('#' + this.name).removeClass('fail');
      });

      let updated = array.filter(function (el) {
        return el.check === false || el.check === undefined;
      });

      $.each(updated, function() {
        $('#' + this.name).addClass('fail');
      });
    }
  }

  function validateFirst (newVal) {
    if (newVal !== undefined) {
      if (newVal.length > 0) {
        first.check = true;
      } else  {
        vm.errFirst = 'First name cannot be left blank!';
        first.check = false;
      }
    }
  }

  function validateLast (newVal) {
    if (newVal !== undefined) {
      if (newVal.length > 0) {
        last.check = true;
      } else  {
        vm.errLast = 'Last name cannot be left blank!';
        last.check = false;
      }
    }
  }

  function validateEmail (newVal) {
    let emailStr = newVal.split("").indexOf("@");

    if (emailStr === -1) {
      vm.errEmail = 'Email must be in valid format: eaxmple@domain.com';
      email.check = false;
    } else {
      if (newVal.length > 0) {
        vm.errEmail = 'Perfect!';
        email.check = true;
      } else  {
        vm.errEmail = 'Email cannot be left blank!';
        email.check = false;
      }
    }
  }

  function validateWeb (newVal) {
    let httpStr = newVal.indexOf("http://");
    let httpsStr = newVal.indexOf("https://");

    if (httpStr !== -1 || httpsStr !== -1) {
      vm.errWeb = 'Perfect!';
      web.check = true;    
    } else {
      vm.errWeb = 'Website must start with "http://" or "https://"';
      web.check = false;
    }
  }

  function validateMsg (newVal) {
    if (newVal !== undefined) {
      if (newVal.length > 0) {
        msg.check = true;
      } else  {
        vm.errMsg = 'Your message cannot be left blank!';
        msg.check = false;
      }
    }
  }

  $scope.$watch('user.first', function (newVal, prevVal) {
    if(!newVal) return;
    validateFirst(newVal);
  });
  $scope.$watch('user.last', function (newVal, prevVal) {
    if(!newVal) return;
    validateLast(newVal);
  });
  $scope.$watch('user.email', function (newVal, prevVal) {
    if(!newVal) return;
    validateEmail(newVal);
  });
  $scope.$watch('user.website', function (newVal, prevVal) {
    if(!newVal) return;
    validateWeb(newVal);
  });
  $scope.$watch('user.msg', function (newVal, prevVal) {
    if(!newVal) return;
    validateMsg(newVal);
  });

};

AddController.$inject = ['UserService', '$scope', '$state'];

export default AddController;