type OutputScreenRowProps = {
  value: string;
  className?: string; 
  id?: string;
};

const OutputScreenRow = ({ value, className, id }: OutputScreenRowProps) => {
  return (
    <div className={`output-screen-row ${className ?? ""}`} id={id}>
      <input type="text" readOnly value={value} />
    </div>
  );
};

export default OutputScreenRow;

