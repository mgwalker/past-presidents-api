const filter = require('./filter');
const add = require('./add-field');
const stats = require('./stats');
const sort = require('./sort');

module.exports = [
  {
    names: ['dead'],
    apply(presidents) {
      return filter.dead(presidents);
    },
    description: 'Filters to just the dead presidents'
  },

  {
    names: ['died', 'diedinoffice'],
    apply(presidents) {
      return filter.diedInOffice(presidents);
    },
    description: 'Filters to just the presidents who died in office'
  },

  {
    names: ['living', 'alive', 'live'],
    apply(presidents) {
      return filter.alive(presidents);
    },
    description: 'Filters to just the presidents who are still alive'
  },

  {
    names: ['birth', 'birthday'],
    apply(presidents) {
      return add.birth(presidents);
    },
    description: 'Adds the presidents\' birthdays to the output',
    sort: 'Sorts by birthday, from most recent birth to oldest'
  },

  {
    names: ['death', 'deathday'],
    apply(presidents) {
      return add.death(presidents);
    },
    description: 'Adds the presidents\' deathdays to the output',
    sort: 'Sorts by deathday, from most recent death to oldest'
  },

  {
    names: ['age'],
    apply(presidents) {
      return add.age(presidents);
    },
    description: 'Adds the presidents\' ages to the output.',
    sort: 'Sorts by current age or age at death, from oldest to youngest'
  },

  {
    names: ['term', 'termlength'],
    apply(presidents) {
      return add.term(presidents);
    },
    description: 'Adds the presidents\' term lengths to the output',
    sort: 'Sorts by term length, from longest to shortest'
  },

  {
    names: ['party'],
    apply(presidents) {
      return add.party(presidents);
    },
    description: 'Adds the presidents\' parties to the output',
    sort: 'Sorts by party affiliation, so all members of the same party are grouped together',
    stats: 'Calculates the number of presidents per party, percentage, total number of days the party has held the presidency, percentage of that, and modifies the party sort to also sort the parties by number of days they held the presidency'
  },

  {
    names: ['elections'],
    apply(presidents) {
      return add.elections(presidents);
    },
    description: 'Add the presidents\' election data to the output',
    sort: 'Sorts by the number of elections won, from most to least',
    stats: 'Calculates the percentage of electoral votes each president won in each of their elections, and changes the sort such that presidents are sorted by their largest electoral victory, from largest to smallest.'
  },

  {
    names: ['photo', 'picture', 'portrait'],
    apply(presidents) {
      return add.photo(presidents);
    },
    description: 'Add a link to the presidents\' portraits'
  },

  {
    names: ['stats', 'statistics'],
    apply(presidents) {
      return stats(presidents);
    },
    description: 'Adds statistics for the last stats-able field'
  },

  {
    names: ['sort', 'sorted'],
    apply(presidents) {
      return sort(presidents);
    },
    description: 'Sorts the presidents by the last sortable field'
  },

  {
    names: ['reverse'],
    apply(presidents) {
      return presidents.reverse();
    },
    description: 'Reverses the list of the presidents'
  }
];
