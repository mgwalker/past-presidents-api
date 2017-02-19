const filter = require('./filter');
const add = require('./add-field');
const map = require('./map');
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
    sortable: true
  },

  {
    names: ['death', 'deathday'],
    apply(presidents) {
      return add.death(presidents);
    },
    description: 'Adds the presidents\' deathdays to the output',
    sortable: true
  },

  {
    names: ['age'],
    apply(presidents) {
      return add.age(presidents);
    },
    description: 'Adds the presidents\' ages to the output.',
    sortable: true
  },

  {
    names: ['term', 'termlength'],
    apply(presidents) {
      return add.term(presidents);
    },
    description: 'Adds the presidents\' term lengths to the output',
    sortable: true
  },

  {
    names: ['party'],
    apply(presidents) {
      return add.party(presidents);
    },
    description: 'Adds the presidents\' parties to the output',
    sortable: true
  },

  {
    names: ['stats', 'statistics'],
    apply(presidents) {
      return map.stats(presidents);
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
