import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    addTask: function(){
      var title = this.get('title');
      var description = this.get('description');
      var date = this.get('date');
      alert(title);
      // create new task
    }
  }
});
