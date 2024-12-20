import { ReactNode } from 'react';

interface ErrorMessageProps {
  children: ReactNode;
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <p className="bg-red-600 p-2 text-white text-center font-semibold rounded-md">
      {children}
    </p>
  );
};
