import React from 'react';
import LayoutWebsite from '../shared/layout/LayoutWebsite';
import BannerSection from '../shared/components/common/website/home/BannerSection';
import BenefitSection from '../shared/components/common/website/home/BenefitSection';
import AboutUsSection from '../shared/components/common/website/home/AboutUsSection';

const Home = () => {
  return (
    <main className='mx-auto min-h-screen w-full'>
      <BannerSection data={{code: "BannerHO", name: "CLB KHIÊU VŨ", description: "SSUN Club", image: "/images/bannerHome.jpg"}} />
      <BenefitSection data={{
        code: 'BenefitHO',
        name: 'Lợi ích thành viên',
        description: 'Lợi ích của Câu lạc bộ khiêu vũ Ssun rất phong phú, cả về thể chất và tinh thần, những lợi ích quý giá nhất mà chúng tôi cung cấp cho thành viên của chúng tôi bao gồm :',
        image: '/images/backgroundBenefit.jpg',
        benefits: [
          "Đạt được mục tiêu giảm cân của bạn và loại bỏ mỡ cơ thể nhanh chóng",
          "Có được vóc dáng tốt nhất cho cuộc sống của bạn",
          "Giúp cơ thể bạn mềm mại và dẻo dai hơn",
          "Cải thiện sự tập trung, kĩ thuật và sức mạnh của bạn",
          "Giảm căng thẳng của bạn một cách lành mạnh và tăng cường năng lượng của bạn",
          "Kết bạn suốt đời,  những người sẽ giúp bạn trên hành trình đạt đến đỉnh cao sức khoẻ",
          "Giúp bạn trở lên tự tin hơn và kết nối được với những người xung quanh."
        ]
      }} />
      <AboutUsSection data={{
        code: 'AboutUsHO',
        name: 'VỀ CHÚNG TÔI',
        description: 'CLB Khiêu vũ Ssun được thành lập năm 2023, với môic buổi tập các học viên sẽ được học các tư thế cơ bản của các điệu nhảy Stanđard quý phái(Waltz, Tango, Quick step) hay kiểu Latin quyến rũ (Rumba, Chachacha, Samba) dưới sự hướng dẫn của các giảng viên kỳ cựu. Nếu bạn chưa từng học qua khiêu vũ, chăm chỉ luyện tập, kiên nhẫn và đam mê,bạn sẽ có cơ hội biến ước mơ nho nhỏ của mình thành hiện thực. Bạn muốn có cơ thể khoẻ mạnh, body mong ước thì đây chính là lựa chọn hoàn hảo của bạn. Những ai đã yêu thích khiêu vũ thì dù ở đâu, làm gì cũng đều muốn có một nơi nào đó để thực hiện niềm đam mê ấy. Vì vậy, hãy đến với chúng tôi. Với tiêu chí đặt khách hàng lên hàng đầu, chúng tôi sẽ cho bạn trải nghiệm tuyệt vời nhất',
        image: '/images/imageAboutUs.jpg'
      }} />
    </main>
  );
};
Home.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default Home;
