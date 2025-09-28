"use client";
import { motion, type HTMLMotionProps } from 'framer-motion';
import React from 'react';

type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd'
  | 'onDragOver'
  | 'onDragEnter'
  | 'onDragLeave'
  | 'onDragCapture'
  | 'onDragExit'
>;

type ButtonProps = NativeButtonProps &
  HTMLMotionProps<'button'> & {
    variant?: 'primary' | 'secondary' | 'ghost';
    children: React.ReactNode;
  };

export default function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold focus-ring transition-colors cursor-pointer';

  const variants: Record<string, string> = {
    primary: 'text-neutral-950 bg-gradient-to-r from-brand-400 to-brand-300 hover:from-brand-300 hover:to-brand-400',
    secondary: 'bg-neutral-800 text-white hover:bg-neutral-700',
    ghost: 'bg-transparent text-white hover:bg-white/10',
  };

  return (
    <motion.button whileTap={{ scale: 0.98 }} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </motion.button>
  );
}


