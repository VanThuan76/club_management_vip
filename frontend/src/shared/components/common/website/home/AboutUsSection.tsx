import { PreImage } from '../../../custom/PreImage';

type Props = {
  data: { code: string; name: string; description: string; image: string };
  className?: string;
};
const AboutUsSection = ({ data }: Props) => {
  return (
    <section id={data.code} className='block w-screen mt-10'>
      <h1 className='text-3xl font-bold mb-3 text-center'>{data.name}</h1>
      <div className='w-full grid grid-cols-1 gap-6 md:grid-cols-2'>
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
        <div className='w-full'>
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
