type styleProps = {
  styles: React.CSSProperties;
};

export default function StyleProps(props: styleProps) {
  return <div style={props.styles}>StyleProps</div>;
}
