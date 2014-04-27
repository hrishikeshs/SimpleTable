SimpleTable
===========

A reusable table using ember.

Simpletable lets you display an html table if your underlying data is backed by an Array.

usage:

`{{view App.SimpleTableView}}`

This will draw the default (and vanilla) html table if your underlying controller is an arrayController. Note that the table headers must be a property on the controller containing a list of strings. Thus, your controller should have a property called `header`. It looks somewhat like:
`headers: <list of strings>`


For more customization to format your rows in various different ways, you may specify your "rowView" as a parameter:
example of this would be: `{{view App.SimpleTableView rowView='CollectionsTableRow'}}` assuming your customized rowview is called  `App.CollectionsTableRowView`

Ember does not currently support itemControllers to be associated with CollectionViews. So in order to do more powerful things, you will need to create and destroy your own controllers in your "rowViews". Hopefully, once the support arrives, it can be baked into SimpleTable.
