interface onDestAndString {
  getName(): string;
  getCity(): string;
  getId(): number;
}

export function searchArrayOnDestinationAndString<T extends onDestAndString>(
  inputArray: Array<T>,
  destination: string,
  searchText: string
): Array<T> {
  let resArray: T[] = [];

  resArray = inputArray.filter((element: T) => {
    const cityMatch =
      element.getCity().toLowerCase() === destination.toLowerCase() ||
      destination === "";
    const searchMatch =
      element.getName().toLowerCase().includes(searchText.toLowerCase()) ||
      element.getId().toString().includes(searchText);
    return cityMatch && searchMatch;
  });

  return resArray;
}
