'use strict';

/* App Module */

angular.module('myApp', ['tasksServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/task-list.html',   controller: TaskListCtrl}).
      when('/new', {templateUrl: 'partials/new-task.html', controller: CreateTaskCtrl}).
      when('/:taskId', {templateUrl: 'partials/show-task.html', controller: TaskShowCtrl}).
      when("/:taskId/edit", {templateUrl: 'partials/edit-task.html', controller: TaskEditCtrl}).
      otherwise({redirectTo: '/'});
}]);
