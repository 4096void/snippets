/**
 * A really really naive tree traverser.
 * @constructor
 * @param {object} tree - a simple nested tree.
 *
 * var test = {
 *  name1: {
 *    name2: {
 *      name3: {
 *        name4: 'value4',
 *      },
 *    },
 *    name5: {
 *      name6: 'value6',
 *    },
 *    name7: {
 *      name8: 'value8',
 *    },
 *  },
 * };
 *
 * tt(test) // [...4 ...6 ...8]
 */
const tt = tree => {
  let rs = [];
  for (k in tree) {
    if (typeof tree[k] === 'object') {
      rs.push(...tt(tree[k]));
    } else {
      let item = {};
      item[k] = tree[k];
      rs.push(item);
    }
  }

  return rs;
};
