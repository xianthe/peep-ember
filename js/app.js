//namespaced application - can be named what you want, but App is convention 
var App = Ember.Application.create();

//Router
App.Router.map(function () {
  this.resource('tables');   // '/#tables'
});

App.TablesRoute = Ember.Route.extend({
	model: function() {
		return App.Table.find(); //get all tables in this resturant
	}
});

//Controller name must match name of your route
App.TablesController = Ember.ArrayController.extend();

//Models - revision because EmberData is in development
App.Store = DS.Store.extend({
	revision: 11,
	adapter: 'DS.FixtureAdapter'
});

App.Table = DS.Model.extend();

App.Table.FIXTURES = [
  {id:1},
  {id:2},
  {id:3},
  {id:4},
  {id:5},
  {id:6},
]


