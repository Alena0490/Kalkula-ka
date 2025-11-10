type OutputScreenRowProps = {
  value: string;
  className?: string; 
};

const OutputScreenRow = ({ value, className }: OutputScreenRowProps) => {
  return (
    <div className={`output-screen-row ${className ?? ""}`}>
      <input type="text" readOnly value={value} />
    </div>
  );
};

export default OutputScreenRow;

