function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((item, index) => item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    const filtered = users.filter(user => user.gender === gender);

    if (filtered.length === 0) {
        return 0;
    }

    return users.filter(user => user.gender === gender).map(user => user.age).reduce((sum, age, _, arr) => sum + age / arr.length, 0);
}