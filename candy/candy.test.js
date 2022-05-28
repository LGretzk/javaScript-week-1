const searchCandies = require('./candy');
// console.log(searchCandies('Ma', 10));

describe('searchCandies', () => {
  it('accepts Ma & 10 and returns Mars, Maltesers', () => {
    expect(searchCandies('Ma', 10)).toStrictEqual(["Mars", "Maltesers"]);
  });

  it('accepts Ma and 2 and returns Mars', () => {
    expect(searchCandies('Ma', 2)).toStrictEqual(['Mars']);
  });

  it('accepts S & 10 and returns Skitties, stittles, starburst', () => {
    expect(searchCandies('S', 10)).toStrictEqual(['Skitties', 'Skittles', 'Starburst']);
  });

  it('accepts S & 4 and returns Skitties, stittles', () => {
    expect(searchCandies('S', 4)).toStrictEqual(['Skitties', 'Skittles']);
  });

});