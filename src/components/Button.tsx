type ButtonProps = {
  label: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const Button = ({ label, handleClick, className }: ButtonProps) => {
  const playSound = () => {
  console.log('🔊 Attempting to play sound...'); // Toto by se mělo zobrazit v konzoli
  const audio = new Audio('click.mp3');
  console.log('Audio object created:', audio);
  audio.volume = 1;
  audio.play()
    .then(() => console.log('✅ Sound played!'))
    .catch((error) => console.error('❌ Audio error:', error));
};

  const handleClickWithSound = (event: React.MouseEvent<HTMLButtonElement>) => {
    playSound();
    handleClick(event);
  };

  return (
    <button
      type="button"
      value={label}
      onClick={handleClickWithSound}
      className={className}
    >
      {label}
    </button>
  );
};

export default Button;