// when building app
type GreetProps = {
  name: string;
  msgCount: number;
  IsLoggedIn: boolean;
};

// when building libararies
interface Greet {
  name: string;
}
export default function Greet(props: GreetProps) {
  return (
    <div>
      {props.IsLoggedIn
        ? `Greet from ${props.name} ,you have ${props.msgCount} unread messages`
        : "welcome new user"}
    </div>
  );
}
