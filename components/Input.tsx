import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> { };

const Input = forwardRef<HTMLInputElement, IProps>(({
  className,
  type,
  disabled,
  ...props
}, ref) => {
  return (
    <input
      type={type}
      className={twMerge(`upload-input`, className)}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  )
});

Input.displayName = "Input";

export default Input;