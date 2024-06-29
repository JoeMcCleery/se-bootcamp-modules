export default function BigCatsFilter({ list, onListUpdated, onReset }) {
  function sortAlpha() {
    onListUpdated(
      list.toSorted((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
      )
    );
  }

  function sortReverse() {
    onListUpdated(list.toReversed());
  }

  function filterPanthera() {
    onListUpdated(list.filter((c) => c.latinName.startsWith("Panthera")));
  }

  function reset() {
    onReset();
  }

  return (
    <div>
      <button onClick={sortAlpha}>Alphabetical</button>
      <button onClick={sortReverse}>Reverse</button>
      <button onClick={filterPanthera}>Panthera</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
