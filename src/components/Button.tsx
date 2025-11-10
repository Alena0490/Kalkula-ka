type ButtonProps = {
  label: string;
  handleClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  className?: string;
};

const Button = ({ label, handleClick, className }: ButtonProps) => {
  return (
    <input 
        type="button" 
        value={label} 
        onClick={handleClick} 
        className={className}       
    />
  );
}

export default Button;