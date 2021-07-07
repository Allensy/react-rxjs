import { of, interval } from "rxjs";
import { map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const api = `https://randomuser.me/api/?results=5&seed=rx-react&nat=us&inc=name&noinfo`;
const getName = (user) => `${user.name.first} ${user.name.last}`;

const source = ["Adam", "Brian", "Christine"];
const names$ = ajax
  .getJSON(api)
  .pipe(map(({ results: users }) => users.map(getName)));

export { source, names$ };
