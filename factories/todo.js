todoApp.factory('Todo', ['$resource', function ($resource) {
    var todoResourceUrl = 'http://localhost:3000/api/v1/todos/:id';
    var todoResourceParams = {id: '@_id'};
    var actions = {
        "update": {
            method: 'PATCH',
            url: todoResourceUrl
        },
        "destroy": {method: 'DELETE'},
    }
    return $resource(todoResourceUrl, todoResourceParams, actions); // Note the full endpoint address
}]);


