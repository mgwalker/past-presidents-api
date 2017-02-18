const filter = require('./filter');
const add = require('./add-field');
const sort = require('./sort');

module.exports = [
  {
    names: ['dead'],
    apply(presidents) {
      return filter.dead(presidents);
    }
  },

  {
    names: ['died', 'diedinoffice'],
    apply(presidents) {
      return filter.diedInOffice(presidents);
    }
  },

  {
    names: ['living', 'alive', 'live'],
    apply(presidents) {
      return filter.alive(presidents);
    }
  },

  {
    names: ['birthday'],
    apply(presidents) {
      return add.birthday(presidents);
    }
  },

  {
    names: ['age'],
    apply(presidents) {
      return add.age(presidents);
    }
  },

  {
    names: ['term'],
    apply(presidents) {
      return add.term(presidents);
    }
  },

  {
    names: ['sort'],
    apply(presidents) {
      return sort(presidents);
    }
  },

  {
    names: ['reverse'],
    apply(presidents) {
      return presidents.reverse();
    }
  }
];
