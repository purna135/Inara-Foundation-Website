import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = '' }: Props) {
  return <div className={`container-px mx-auto max-w-[1200px] ${className}`}>{children}</div>;
}


