angular.module('MovieApp', ['ngRoute', 'ngResource', 'ngGravatar']).config(function (GravatarProvider) {
	GravatarProvider.setSize(100);
});