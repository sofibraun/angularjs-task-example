'use strict';

/* Controllers */

function TaskListCtrl($scope, Task) {
  $scope.tasks = Task.query();
}

function TaskShowCtrl($scope, $routeParams, Task) {
  $scope.task = Task.get({taskId: $routeParams.taskId}, function(task) {
  });
}


function CreateTaskCtrl($scope, $location, Task){
	$scope.saveTask = function() {
		Task.save($scope.task, function(task) {
  		return $location.path("/");
		});
	};
}

function TaskEditCtrl($scope, $location, $routeParams, Task) {
  self = this;

  Task.get({taskId: $routeParams.taskId}, function(task){
  	self.original = task;
  	$scope.task = new Task(self.original);
  });
 
  $scope.isClean = function() {
  	return angular.equals(self.original, $scope.task);
	};

	$scope.destroy = function() {
	  var dconfirm;
	  dconfirm = confirm("Are you sure?");
	  if (dconfirm) {
	    return Task.destroy({taskId: $routeParams.taskId}, function() {
	      return $location.path("/");
	    });
	  }
	};

	$scope.save = function() {
	  return Task.update({taskId: $routeParams.taskId}, $scope.task, function(task) {
	    return $location.path("/");
	  });
	};
}
   
