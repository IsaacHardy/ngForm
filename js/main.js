import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import UserController from './controllers/user.controller';
import AddController from './controllers/add.controller';

import UserService from './services/user.service';

import PARSE from './constants/parse.constant';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('UserController', UserController)
  .controller('AddController', AddController)
  .service('UserService', UserService)
  ;
