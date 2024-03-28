import React from 'react';
import Email from './icons/email';
import Github from './icons/github';
import LinkedIn from './icons/linkedin';

interface FooterIconProps {
  ariaLabel: string;
  children: JSX.Element;
  href: string;
}

function FooterIcon({ ariaLabel, children, href }: FooterIconProps) {
  return (
    <a
      aria-label={ariaLabel}
      className='w-6 h-6 hover:text-black transition'
      href={href}
      rel='noreferrer'
      style={{
        minHeight: 24,
        minWidth: 24,
      }}
      target='_blank'
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className='flex justify-center'>
      <div className='flex flex-col gap-8 items-center my-8 text-neutral-100 text-sm text-center w-full max-w-7xl'>
        <div className='flex flex-wrap justify-center w-full max-w-xl gap-x-12 gap-y-8 items-center px-8'>
          <span>
            &copy; {new Date().getFullYear()} Jakob Upton
          </span>
          <div className='flex flex-wrap gap-6 items-center justify-center'>
            <FooterIcon ariaLabel='github' href={'https://github.com/jakobupton'}>
              <Github />
            </FooterIcon>
            <FooterIcon ariaLabel='linkedin' href={'https://www.linkedin.com/in/jakobupton/'}>
              <LinkedIn />
            </FooterIcon>
            <FooterIcon ariaLabel='email' href={'mailto:me@jakobupton.dev'}>
              <Email />
            </FooterIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}