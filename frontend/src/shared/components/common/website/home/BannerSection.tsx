import React from 'react';
import { PreImage } from '../../../custom/PreImage';

type Props = {
  data: { code: string; name: string; description: string; image: string };
  className?: string;
};
const BannerSection = ({ data }: Props) => {
  if (!data) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.code} className='block w-screen'>
      <div className='snap-x-mandatory scrollbar-none light:text-white relative flex max-h-[600px] overflow-hidden md:block'>
        <div className='relative mx-auto flex w-full items-center justify-between'>
          <div className='absolute left-1/3 top-1/3 z-30 flex w-[50%] -translate-x-1/2 -translate-y-1/2 transform flex-col items-start justify-start gap-3 text-white'>
            <div className='flex flex-col items-start justify-start gap-3'>
              <h1 className='text-2xl font-light md:text-4xl'>{data.name}</h1>
              <div
                style={{ lineHeight: '120%' }}
                className='w-full text-2xl font-medium uppercase text-white lg:text-5xl'
              >
                {data.description}
              </div>
            </div>
          </div>
          <div className='relative w-full flex-shrink-0 snap-start'>
            <PreImage
              src={data.image}
              height={760}
              width={1980}
              layer={true}
              alt={data.name}
              className='w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
