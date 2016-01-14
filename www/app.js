angular
    .module('App', [
        'ngRoute',
        'facebook'
    ])
    .config(function ($routeProvider, FacebookProvider) {

        FacebookProvider.init('1668826046710189');

        $routeProvider
            .otherwise({ redirectTo: '/' })
            .when('/', { templateUrl: 'Home/Home.html', controller: 'HomeCtrl' })
            .when('/home', { templateUrl: 'Home/Home.html', controller: 'HomeCtrl' })
            .when('/reward', { templateUrl: 'Reward/Reward.html', controller: 'RewardCtrl' })
            .when('/howto', { templateUrl: 'Howto/Howto.html', controller: 'HowtoCtrl' })
            .when('/role', { templateUrl: 'Role/Role.html', controller: 'RoleCtrl' });

    });