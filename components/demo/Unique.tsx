import { useUnique } from "use100hooks";

interface Person {
  id: number;
  name: string;
}

const Unique = () => {
  const numbers = [1, 2, 3, 2, 4, 4, 5];
  const uniqueNumbers = useUnique(numbers);
  const people: Person[] = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "John" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Jane" },
  ];
  const uniquePeople = useUnique(people, "name");
  return (
    <div>
      <h2>Unique Numbers</h2>
      <ul>
        {uniqueNumbers.map((number: number, index: number) => (
          <li key={index}>{number}</li>
        ))}
      </ul>

      <h2>Unique People</h2>
      <ul>
        {(uniquePeople as Person[]).map((person: Person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Unique;
