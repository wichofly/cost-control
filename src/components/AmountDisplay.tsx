import { formatCurrency } from '../helper';

interface AmountDisplayProps {
  label?: string;
  amount: number;
}
export const AmountDisplay = ({ label, amount }: AmountDisplayProps) => {
  return (
    <p className="text-2xl text-sky-600 font-semibold">
      {label && `${label}: `}
      <span className="text-black">{formatCurrency(amount)}</span>
    </p>
  );
};
