export function fromArrayToString(array) {
  let string = "";
  array.forEach((item) => {
    item.id = item.id.toString();
    string += item.id + " || ";
  });
  return string;
}
