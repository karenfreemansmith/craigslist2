import Ember from 'ember';
var categories = ["Politics", "Advice", "Personal", "Entertainment"];

export default Ember.Route.extend({
  model() {
    return categories;
  }
});
