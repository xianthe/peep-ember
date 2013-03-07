//namespaced application - can be named what you want, but App is convention 
var App = Ember.Application.create();

//Router
App.Router.map(function() {
  this.resource('tables', function() {
    this.resource('table', {path:':table_id'});
  });  
});

//Ember generates much of the detail code of the master - detail model 
App.TablesRoute = Ember.Route.extend({
	model: function() {
		return App.Table.find(); //get all tables in this resturant
	}
});

// AUTO GENERATED ==================
// not needed, generated 
// passive code written to disk
// active code built in memory you will never see, you get constant upgrades much easier
// ====================
// App.TableRoute = Ember.Route.extend({
//   model: function(params) {
//     return App.Table.find(params.id); //get all tables in this resturant
//   }
// });


// Controllers are not like MVC as you know it where one controller is active,
// data is pulled from model, sent to view loaded in browser.

// Ember uses more of the original 1970s concept of desktop MVC where several
// controllers are active at once on a page, models will come and go and get changed
// each controlling their aspect of page. Controllers are long lived, and will
// be instiated at boot time

//Controller name must match name of your route - ability to use each
App.TablesController = Ember.ArrayController.extend();

// AUTO GENERATED
//singular controller - proxy to attributes
// App.TableController = Ember.ObjectController.extend();

App.FoodController = Ember.ArrayController.extend();

// Models

// Version 1 Table Model and Data
// //Models - revision because EmberData is in development
// App.Store = DS.Store.extend({
// 	revision: 11,
// 	adapter: 'DS.FixtureAdapter'
// });

// App.Table = DS.Model.extend();

// App.Table.FIXTURES = [
//   {id:1},
//   {id:2},
//   {id:3},
//   {id:4},
//   {id:5},
//   {id:6},
// ]

// Models
// This is a good way to start an application before even involving a server.
// Then when data is ready you can stub or attach a ajax/JSON feed here instead.
App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

App.Table = DS.Model.extend({
  tab: DS.belongsTo('App.Tab')
});

App.Tab = DS.Model.extend({
  tabItems: DS.hasMany('App.TabItem')
});

App.TabItem = DS.Model.extend({
  cents: DS.attr('number'),
  food: DS.belongsTo('App.Food')
});

App.Food = DS.Model.extend({
  name: DS.attr('string'),
  imageUrl: DS.attr('string'),
  cents: DS.attr('number')
});

App.Table.FIXTURES = [{
  id: 1,
  tab: 1
}, {
  id: 2,
  tab: 2
}, {
  id: 3,
  tab: 3
}, {
  id: 4,
  tab: 4
}, {
  id: 5,
  tab: 5
}, {
  id: 6,
  tab: 6
}];

App.Tab.FIXTURES = [{
  id: 1,
  tabItems: []
}, {
  id: 2,
  tabItems: []
}, {
  id: 3,
  tabItems: []
}, {
  id: 4,
  tabItems: [400, 401, 402, 403, 404]
}, {
  id: 5,
  tabItems: []
}, {
  id: 6,
  tabItems: []
}];

App.TabItem.FIXTURES = [{
  id: 400,
  cents: 1500,
  food: 1
}, {
  id: 401,
  cents: 300,
  food: 2
}, {
  id: 402,
  cents: 700,
  food: 3
}, {
  id: 403,
  cents: 950,
  food: 4
}, {
  id: 404,
  cents: 2000,
  food: 5
}];

App.Food.FIXTURES = [{
  id: 1,
  name: 'Pizza',
  imageUrl: 'img/pizza.png',
  cents: 1500
}, {
  id: 2,
  name: 'Pancakes',
  imageUrl: 'img/pancakes.png',
  cents: 300
}, {
  id: 3,
  name: 'Fries',
  imageUrl: 'img/fries.png',
  cents: 700
}, {
  id: 4,
  name: 'Hot Dog',
  imageUrl: 'img/hotdog.png',
  cents: 950
}, {
  id: 5,
  name: 'Birthday Cake',
  imageUrl: 'img/birthdaycake.png',
  cents: 2000
}];



