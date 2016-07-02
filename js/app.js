(function() {

    var app = angular.module('todoList', []);

    app.controller('todoController', function($scope) {
        this.todos = todoList;
        this.addTodo = function(todoTxt) {
            checkLength(todoTxt);
        };
        this.getTotalTodos = function() {
            return this.todos.length;
        };
        this.clearCompleted = function() {
            for (var i = todoList.length - 1; i >= 0; i--) {
                if (todoList[i].done === true) {
                    todoList.splice(i, 1);
                }
            }
        };
        this.deleteCurrent = function(todo) {
            todo.done = true;
            this.clearCompleted();
        };

        function checkLength(txt) {
            if (txt === undefined) {
                console.log('Something went wrong. Donno what.')
            } else if (txt.length > 5 && txt.length < 100) {
                todoList.push({ text: txt, done: false });
                $scope.todoText = "";
            } else {
                console.log('Your todo is too short!');
                $scope.todoText = "";
            }
        }
    });

    var todoList = [
        { text: 'Learn AngularJS', done: false }, //todo
        { text: 'Get a job', done: false }, //todo
        { text: 'Become a hero', done: false }, //todo
    ];


})();