import { usePermutation } from "use100hooks";

const Permutation = () => {
  const items = [1, 2, 3];
  const permutations = usePermutation(items);

  return (
    <div>
      <h2>Permutations</h2>
      {permutations ? (
        <ul>
          {permutations.map((permutation, index) => (
            <li key={index}>{JSON.stringify(permutation)}</li>
          ))}
        </ul>
      ) : (
        <p>Generating permutations...</p>
      )}
    </div>
  );
};
export default Permutation;
