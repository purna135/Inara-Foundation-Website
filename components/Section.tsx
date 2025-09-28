import React from 'react';
import Container from './Container';

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  size?: 'default' | 'dense' | 'none';
};

export default function Section({ id, className = '', size = 'default', children }: Props) {
  const padding =
    size === 'none'
      ? 'py-0'
      : size === 'dense'
      ? 'py-10 sm:py-12 lg:py-16'
      : 'py-14 sm:py-20 lg:py-28';
  return (
    <section id={id} className={`${padding} relative ${className}`}>
      <div className="absolute inset-0 bg-grid pointer-events-none select-none" aria-hidden="true" />
      <Container>
        <div className="relative z-10">{children}</div>
      </Container>
    </section>
  );
}


