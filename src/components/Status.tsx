type statusProps = {
  status: "loading" | "success" | "error";
};

export default function Status(props: statusProps) {
  let status_msg;
  switch (props.status) {
    case "loading":
      status_msg = props.status;
      break;
    case "success":
      status_msg = props.status;
      break;
    case "error":
      status_msg = props.status;
      break;
    default:
      status_msg = "wrong - props is passed";
      break;
  }
  return <div>Status -- {status_msg}</div>;
}
