var HomeView = function(store){

  this.initialize = function() {
    // Define a div wrapper for the view. The div wrapper is used to attach events.
    this.el = $('<div/>');
    this.el.on('keyup', '.search-key', this.findByName);
  };

  this.render = function() {
    this.el.html(HomeView.homeTpl());
    return this;
  };

  this.findByName = function() {
    var self = this;
    store.findByName($('.search-key').val(), function(employees) {
      $('.employee-list').html(HomeView.employeeLiTpl(employees));
    });
  },

  this.initialize();

};

HomeView.homeTpl = Handlebars.compile($("#home-tpl").html());
HomeView.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());