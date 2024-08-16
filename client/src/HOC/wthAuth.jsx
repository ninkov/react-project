export default function withAut(Component) {
  const ComponentWrapper = (props) => {
    return <Component {...props} />;
  };
  return ComponentWrapper;
}
