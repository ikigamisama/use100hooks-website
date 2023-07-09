import { useSort } from "use100hooks";

interface Person {
  id: number;
  name: string;
  age: number;
}

const Sort = () => {
  const numbers = [3, 1, 5, 2, 4];
  const sortedNumbers = useSort(numbers, null, "desc");

  const people: Person[] = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 20 },
  ];
  const sortedPeople = useSort(people, "age", "asc");

  return (
    <div>
      <h2>Sorted Numbers (descending order)</h2>
      <ul>
        {sortedNumbers.map((number: number, index: number) => (
          <li key={index}>{number}</li>
        ))}
      </ul>

      <h2>Sorted People (ascending order by age)</h2>
      <ul>
        {(sortedPeople as Person[]).map((person: Person) => (
          <li key={person.id}>
            {person.name} - {person.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sort;
