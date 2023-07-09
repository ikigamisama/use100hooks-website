import { useRemoveNull } from "use100hooks";

interface Person {
  id: number;
  name: string | null;
}

const RemoveNull = () => {
  const numbers = [1, null, 3, null, 5];
  const uniqueNumbers = useRemoveNull(numbers);

  const people: Person[] = [
    { id: 1, name: "John" },
    { id: 2, name: null },
    { id: 3, name: "Jane" },
    { id: 4, name: null },
    { id: 5, name: "Bob" },
  ];
  const nonNullPeople = useRemoveNull(people);

  return (
    <div>
      <h2>Unique Numbers (without null values)</h2>
      <ul>
        {uniqueNumbers.map((number: number, index: number) => (
          <li key={index}>{number}</li>
        ))}
      </ul>

      <h2>Non-Null People</h2>
      <ul>
        {(nonNullPeople as Person[]).map((person: Person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default RemoveNull;
