const Footer = () => {
  return (
    <footer className='grid w-full grid-cols-2 items-center justify-between bg-black text-white px-4 py-3'>
      <div className='grid w-full grid-cols-1 gap-4'>
        <h2>Thông tin liên hệ</h2>
        <div className='flex items-center justify-center'>
          <p>Công ty TNHH SSUN Việt Nam</p>
        </div>
        <div className='flex items-center justify-center'>
          <p>0333135698</p>
        </div>
        <div className='flex items-center justify-center'>
          <p>ssun45@gmail.com</p>
        </div>
      </div>
      <div className='grid w-full grid-cols-1 gap-4'>
        <h2>Liên hệ</h2>
        <div className="flex items-center justify-center gap-3">
            <p>Trang chủ</p>
            <p>Dịch vụ</p>
            <p>Liên hệ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
