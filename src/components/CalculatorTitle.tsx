
type CalculatorTitleProps = {
  value: string;
};

function CalculatorTitle({ value }: CalculatorTitleProps) {
  return (
    <div className="calculator-title">{value}</div>
  );
}

export default CalculatorTitle;