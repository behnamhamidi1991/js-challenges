const displayLikes = require('./likes');

test('Display Likes', () => {
  expect(displayLikes([])).toEqual('No one likes this.');
  expect(displayLikes(['Peter'])).toEqual('Peter liked this.');
  expect(displayLikes(['Jacob', 'Alex'])).toEqual('Jacob and Alex liked this.');
  expect(displayLikes(['Jill', 'Claire', 'Chris', 'Leon', 'Rebecca'])).toEqual(
    'Jill, Claire and 3 others liked this.'
  );
});
