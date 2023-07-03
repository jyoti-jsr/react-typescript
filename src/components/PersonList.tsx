type name = {
  id: number;
  first: string;
  last: string;
};

type nameListProps = {
  nameList: name[];
};

export default function PersonList(props: nameListProps) {
  return (
    <div>
      PersonList
      {props.nameList.map((person) => (
        <div>
          <div>
            {person.first} {person.last}
          </div>
        </div>
      ))}
    </div>
  );
}
