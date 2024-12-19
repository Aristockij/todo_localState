import { ChevronDown } from "lucide-react";

interface ButtonProps {
  disableBtn: boolean;
}

const Button = ({ disableBtn }: ButtonProps) => {
  return (
    <button
      type='submit'
      className={
        disableBtn
          ? " pl-1 pr-2 mt-2 rounded-lg absolute bottom-0 left-0  h-full "
          : " pl-1 pr-2 mt-2 rounded-lg absolute bottom-0 left-0  h-full "
      }
      disabled={disableBtn}
    >
      <ChevronDown color={disableBtn ? "gray" : "black"} size={25} />
    </button>
  );
};
export default Button;
