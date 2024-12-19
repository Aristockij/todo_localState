interface InputType {
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputType) => {
  return (
    <input
      type='text'
      value={props.value}
      className='outline-none border border-slate-950  pl-10 h-8 w-full '
      onChange={props.setValue}
    />
  );
};
export default Input;
