type InputProps = {
  value: string;
  handleChange: () => void;
  handleChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputEvent(props: InputProps) {
  return (
    <>
      <input
        type="text"
        value={props.value}
        onChange={() => {
          props.handleChange();
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          props.handleChangeEvent(e);
        }}
      />
    </>
  );
}
