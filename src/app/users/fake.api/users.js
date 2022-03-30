const users = [
  {
    login: "John1990",
    name: "John",
    password: "12345678",
  },
  {
    login: "Kate1990",
    name: "Kate",
    password: "qwertyui",
  },
  {
    login: "Mike1990",
    name: "Mike",
    password: "87654321",
  },
  {
    login: "Bob1990",
    name: "Bob",
    password: "iuytrewq",
  },
  {
    login: "Anna1990",
    name: "Anna",
    password: "1234qwer",
  },
];

export function fetchAll() {
  return users;
}
