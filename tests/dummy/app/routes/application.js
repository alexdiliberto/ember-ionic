import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      items: "1 2 3 4 5 6 7 9 10 11 12 13 14 15 16 17 18 19 20".w()
    };
  }
});
