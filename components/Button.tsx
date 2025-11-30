import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  type = 'button',
  fullWidth = false,
}: ButtonProps) {
  const baseClasses = `inline-block px-6 py-3 rounded-lg transition-all ${
    fullWidth ? 'w-full text-center' : ''
  }`;

  const variantClasses = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800',
    secondary: 'bg-coral-100 text-coral-900 border border-coral-300 hover:bg-coral-200',
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
