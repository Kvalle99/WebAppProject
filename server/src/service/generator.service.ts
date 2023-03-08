/**
 * Generates an array that is not already in the list of id's received.
 * Currently only used when making new trips, though is planned to be used when
 * adding a new Activity, adding a new destination or adding a new accommodation to the platform.
 * @param idArray id of arrays in the current list.
 * Should instead just query dependant on the id in the right table/collection in the DB if added.
 * @returns a randomly generated id which is not already in the list.
 */
export function generateID(idArray: Array<number>): number {
  let id = generateRandomNumber();
  while (isExists(idArray, id)) {
    id = generateRandomNumber();
  }
  return id;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100000);
}

function isExists(idArray: Array<number>, id: number): boolean {
  let res: boolean = false;
  var result = idArray.find((itemId) => {
    return itemId === id;
  });
  result === undefined ? (res = false) : (res = true);
  return res;
}
