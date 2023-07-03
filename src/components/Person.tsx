type personProps = {
  first: string;
  last: string;
};

export default function Person(props: personProps) {
  return (
    <div>
      {props.first} {props.last}
    </div>
  );
}
