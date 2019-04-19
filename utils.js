/**
 * Traverse nodes of a tree with specific depth, with { `nodeName`: `nodeValue` }.
 * @constructor
 * @param {object} tree - a simple nested tree.
 * @param {number} d - specific depth, default to `Infinity`(get all the leaf nodes).
 * @param {string} t - the name of root, default to `treename`.
 *
 */
const tt = (
  tree,
  d = Infinity,
  t = 'treeName',
) => {
  let rs = [];

  /* Root is a single object. */
  if (d === 0) {
    let item = {};
    item[t] = tree;
    return [item];
  }
  // TODO: root is an array.

  for (k in tree) {
    if (d === 0) {
      let item = {};
      item[k] = tree[k];
      rs.push(item);
    } else if (d > 0
      && typeof tree[k] === 'object') {
      rs.push(...tt(tree[k], d));
    } else {
      rs.push(tree[k]);
    }
  }

  return rs;
};

/**
 * Return first value of object `with only one key-value pair`.
 * @constructor
 * @param {object} o - objects like { name: 'value' }.
 */
const fk = o => { for (k in o) { return k; } };

/**
 * Return first value of object `with only one key-value pair`.
 * @constructor
 * @param {object} o - objects like { name: 'value' }.
 */
const fv = o => { for (k in o) { return o[k]; } };

/**
 * Return anything that was passed into.
 * @constructor
 * @param {any} id - anthing.
 */
const id = i => i;
