(function(namespace) {
  namespace.RowView = Ember.View.extend({
  classNames: ['table-row'],
  defaultTemplate: Ember.Handlebars.compile('<tr>{{#each property in view.contentProxy}}<td>{{property}}</td>{{/each}}<tr>'),
  contentProxy: function() {
    var content = this.get('content'),
      keys = Ember.keys(content),
      array = [];

      keys.forEach(function(key) {
        array.push([content[key]]);
      });
      return array;
    }.property('content')

  });

  namespace.SimpleTableView = Ember.View.extend({
    tagName: 'table',
    classNames: ['table'],
    templateName: 'simpletable'
  });

  namespace.TableView = Ember.CollectionView.extend({
    tagName: 'tbody',
    contentBinding: 'controller.content',
    rowView: Ember.computed.alias('parentView.rowView'),
    emptyView: Ember.View.extend({
      template: Ember.Handlebars.compile("No data")
    }),

    createChildView: function(viewClass, attrs) {
      if (this.get('rowView')) {
        viewClass = this.get('rowView');
      }
      else {
        viewClass = 'row';
      }
      return this._super(viewClass, attrs);
    }
  });

  namespace.TableHeaderView = Ember.View.extend({
    tagName: 'thead',
    contentBinding: 'controller.headers',
    classNames: ['table-row'],
    defaultTemplate: Ember.Handlebars.compile('{{#each header in view.content}}<th>{{header}}</th>{{/each}}')
  });
}(App));
