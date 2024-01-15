import React, { SVGProps } from 'react';

export default function IconChevronRight({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <rect y='0.5' width='16' height='15' rx='7.5' fill='#FF9900' />
      <path
        d='M7.13798 11.5669L10.9426 7.99998L7.13798 4.43311L6.19531 5.31686L9.05731 7.99998L6.19531 10.6831L7.13798 11.5669Z'
        fill='white'
      />
    </svg>
  );
}
