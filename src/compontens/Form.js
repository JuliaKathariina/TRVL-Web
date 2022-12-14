export default function Form({ children, type = "text", ...props }) {
  return (
    <form type={type} {...props}>
      {children}
    </form>
  );
}
