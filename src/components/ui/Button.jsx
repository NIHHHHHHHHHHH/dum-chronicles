"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  icon,
}) {
  const styles = {
    primary: ` bg-primary hover:bg-primary-dark text-text px-7 py-3.5 rounded-lg font-body font-bold text-sm
      tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-primary/30 `,
    secondary: ` bg-accent hover:bg-accent-dark text-bg px-7 py-3.5 rounded-lg font-body font-bold text-sm 
      tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-accent/30 `,
    outline: ` bg-transparent border border-border-bright hover:border-accent text-text hover:text-accent
      px-7 py-3.5 rounded-lg font-body font-bold text-sm tracking-widest uppercase transition-all duration-300 `,
    ghost: ` bg-transparent text-accent hover:text-accent-dark px-4 py-2 font-body font-bold text-sm
      tracking-widest uppercase transition-all duration-300 underline-offset-4 hover:underline `,
  };

  const content = (
    <>
      {icon && <span>{icon}</span>}
      {children}
    </>
  );

  const motionProps = {
    whileHover: !disabled ? { scale: 1.04 } : {},
    whileTap: !disabled ? { scale: 0.97 } : {},
  };

  if (href) {
    return (
      <motion.a
        href={href}
        {...motionProps}
        className={`inline-flex items-center gap-2 ${styles[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      className={`inline-flex items-center gap-2 ${styles[variant]} ${className} disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {content}
    </motion.button>
  );
}