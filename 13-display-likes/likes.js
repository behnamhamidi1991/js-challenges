function displayLikes(names) {
  const length = names.length;

  if (length === 0) {
    return 'No one likes this.';
  } else if (length === 1) {
    return `${names[0]} liked this.`;
  } else if (length === 2) {
    return `${names[0]} and ${names[1]} liked this.`;
  } else if (length === 3) {
    return `${names[0]}, ${names[1]} and ${names[3]} liked this.`;
  } else {
    return `${names[0]}, ${names[1]} and ${length - 2} others liked this.`;
  }
}

module.exports = displayLikes;
