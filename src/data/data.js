// manual DB
const notes = new Array(15)
  .fill(1)
  .map((_, i) => ({
    id: Date.now() + i,
    title: `Note ${i}`
  }));

// don't use exports ES6 because it doesn't persist
module.exports = notes;