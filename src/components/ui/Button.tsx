import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    target?: string;
    rel?: string;
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    className = '',
    onClick,
    type = 'button',
    target,
    rel,
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-none font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-terracotta text-white hover:bg-[#A6283E] focus:ring-terracotta',
        secondary: 'bg-beige text-terracotta hover:bg-[#FFF0F3] focus:ring-beige',
        outline: 'border-2 border-terracotta text-terracotta hover:bg-[#FFF0F3] hover:text-terracotta focus:ring-terracotta',
        text: 'text-terracotta hover:text-[#8a4d46] underline-offset-4 hover:underline p-0',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const styles = `${baseStyles} ${variants[variant]} ${variant !== 'text' ? sizes[size] : ''} ${className}`;

    if (href) {
        return (
            <Link href={href} className={styles} target={target} rel={rel}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={styles} onClick={onClick}>
            {children}
        </button>
    );
}
