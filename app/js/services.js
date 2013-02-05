'use strict';

/* Services */

angular.module('tasksServices', ['ngResource']).
    factory('Task', function($resource){
  return $resource('http://localhost\\:3000/tasks/:taskId', {}, {
    query: {method: 'GET', params:{taskId: ''}, isArray:true},
    update: {method:'PUT', params:{ taskId: '' }},
    destroy: {method:'DELETE', params:{ taskId: '' }}
  });
});
