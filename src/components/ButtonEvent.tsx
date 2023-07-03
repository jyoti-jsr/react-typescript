type ButtonProps = {
  handleClick: () => void;
  handleClickEvent: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

export default function ButtonEvent(props: ButtonProps) {
  return (
    <div>
      <button onClick={props.handleClick}>Click</button>
      <button onClick={(e) => props.handleClickEvent(e, 1)}>Click</button>
    </div>
  );
}
