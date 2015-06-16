/*globals angular*/
(function () {
    var phone = function () {
            return function Phone(name) {
                this.name = name;
                this.id   = name.toLowerCase().replace(' ', '-');
            };
        };

    angular.module('demoApp').factory('Phone', phone);
}());
