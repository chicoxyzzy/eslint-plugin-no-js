'use strict';

var path = require('path');

module.exports = {
  rules: {
    'no-js': function(context) {
      return {
        Program: function(node) {
          if (path.extname(context.getFilename()) === '.js') {
            context.report(node, 'You are attempting to use JavaScript. U MAD?');
          }
        },
      };
    },
    'no-jsx': function(context) {
      return {
        Program: function(node) {
          if (path.extname(context.getFilename()) === '.jsx') {
            context.report(node, 'You are attempting to use JSX. This is strictly prohibited.');
          }
        },
      };
    },
  },
};
