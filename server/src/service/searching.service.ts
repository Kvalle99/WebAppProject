/* Used to search for either activities or accomodations in a given destination */
interface hasDestAndString {
  getName(): string;
  getCity(): string;
  getId(): number;
}

export function filterOnDestNameId<T extends hasDestAndString>(
  inputArray: Array<T>,
  destination: string,
  searchText: string
): Array<T> {
  let resArray: T[] = [];

  resArray = inputArray.filter((element: T) => {
    const cityMatch = matchDestination(element, destination);
    const searchMatch = matchSearch(element, searchText);
    return cityMatch && searchMatch;
  });

  return resArray;
}

/**
 * This function takes in a string right now, as the variables in activity and accommodation are strings.
 * However, those classes should have the destination variable of type Destination in the future.
 * That means that we could use the same matchDestination in filterOnDestNameId and filterOnSearchCityCountry */
function matchDestination<T extends hasDestAndString>(
  element: T,
  destination: string
) {
  return (
    element.getCity().toLowerCase() === destination.toLowerCase() ||
    destination === ""
  );
}

function matchSearch<T extends hasDestAndString>(
  element: T,
  searchText: string
) {
  return (
    element.getName().toLowerCase().includes(searchText.toLowerCase()) ||
    element.getId().toString().includes(searchText) ||
    element.getCity().toLowerCase().includes(searchText.toLowerCase())
  );
}

/* For filtering destinations depending on the search string, both on country and city */
interface hasCityAndCountry {
  getCity(): string;
  getCountry(): string;
}

export function filterOnSearchCityCountry<T extends hasCityAndCountry>(
  inputArray: Array<T>,
  searchText: string
): Array<T> {
  let resArray: T[] = [];

  resArray = inputArray.filter((element: T) => {
    const match =
      element.getCity().toLowerCase().includes(searchText.toLowerCase()) ||
      element.getCountry().toLowerCase().includes(searchText.toLowerCase());
    return match;
  });

  return resArray;
}
