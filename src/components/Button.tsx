type ButtonProps = {
  label: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const Button = ({ label, handleClick, className }: ButtonProps) => {
  return (
    <button
      type="button"
      value={label}
      onClick={handleClick}
      className={className}
    >
      {label}
    </button>
  );
};

export default Button;
