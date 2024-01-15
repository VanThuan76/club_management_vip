import { PreImage } from "../../../custom/PreImage";
import IconChevronRight from "../../../icons/IconChevronRight";

type Props = {
    data: { code: string; name: string; description: string; image: string, benefits: string[] };
  };
const BenefitSection = ({ data }: Props) => {
  return (
    <section id={data.code} className='block w-screen'>
      <div className='snap-x-mandatory scrollbar-none light:text-white relative flex max-h-[600px] overflow-hidden md:block'>
        <div className='relative mx-auto flex w-full items-center justify-between'>
          <div className='absolute left-1/3 top-1/3 z-30 flex w-[50%] -translate-x-1/2 -translate-y-1/2 transform flex-col items-start justify-start gap-3 text-white'>
            <div className='flex flex-col items-start justify-start gap-3'>
              <h1 className='text-3xl font-bold'>{data.name}</h1>
              <div
                style={{ lineHeight: '120%' }}
                className='w-full font-normal text-white text-lg'
              >
                {data.description}
              </div>
              <div className="w-full ml-4 flex flex-col justify-center items-start gap-2">
                {data.benefits.map(((benefit, index) => (
                    <div className="w-full flex justify-start items-center gap-4">
                        <IconChevronRight />
                        <p className="text-base">{benefit}</p>
                    </div>
                )))}
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

export default BenefitSection;
