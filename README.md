SimpleTable
===========

A reusable table using ember.

Simpletable lets you display an html table if your underlying data is backed by an Array.

usage:
(Replace 'App' which is a generic name I used in simpletable.handlebars and in simpletable.js to whatever your app's name is.)

To use this in a template backed by an arrayController:
```

{{view App.SimpleTableView}}

```
This will draw the default (and vanilla) html table if your underlying controller is an arrayController. Note that the table headers must be a property on the controller containing a list of strings. Thus, your controller should have a property called `headers`. It looks somewhat like:
```

headers: <list of strings>

```
For more customization to format your rows in various different ways, you may specify your "rowView" as a parameter:
example of this would be: `{{view App.SimpleTableView rowView='CollectionsTableRow'}}` assuming your customized rowview is called  `App.CollectionsTableRowView`

Example:

Given this array of headers:

```
headers: ['Lord', 'House', 'Seat']

```
and this content:

```
 content: [
     {
       'name' : 'Ned Stark',
       'house': 'Stark',
       'location' : 'Winterfell'
     },
     {
       'name' : 'Tyrion Lannister',
       'house': 'Lannister',
       'location' : 'Casterly Rock',
     },
     {
        'name'  : 'Robert Baratheon',
        'house' : 'Baratheon',
        'location' : "King's Landing",
     },
     {
        'name'  : 'Stannis Baratheon',
        'house' : 'Baratheon',
        'location' : "DragonStone",
     },
     {
        'name'  : 'Prince Oberyn',
        'house' : 'Dorne',
        'location' : "Dorne",
     },
     {
        'name'  : 'Mace Tyrell',
        'house' : 'Tyrell',
        'location' : "HighGarden",
     },
     {
        'name'  : 'Balon Greyjoy',
        'house' : 'Greyjoy',
        'location' : "Iron Islands",
     },
     {
        'name'  : 'Walder Frey',
        'house' : 'Frey',
        'location' : "The Neck",
     }

 ],

```
Simpletable will draw a table that looks like:

![screenshot](https://raw.githubusercontent.com/hrishikeshs/SimpleTable/master/table.png "screenshot")


Ember does not currently support itemControllers to be associated with CollectionViews. So in order to do more powerful things, you will need to create and destroy your own controllers in your "rowViews". Hopefully, once the support arrives, it can be baked into SimpleTable.

License
========
Copyright © 2014 Hrishikesh S

SimpleTable is licensed under the <a href="http://www.opensource.org/licenses/MIT">MIT License</a>.


