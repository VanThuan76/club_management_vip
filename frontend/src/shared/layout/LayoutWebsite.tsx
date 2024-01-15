import React from 'react';
import { useAppSelector } from '@/src/shared/hooks/useRedux';
// import { useGetUserById } from 'src/queries/user.queries';
import Footer from '../components/common/website/Footer';
import Header from '../components/common/website/Header';
interface Props {
  children: React.ReactNode;
}
const LayoutWebsite = ({ children }: Props) => {
  const { user } = useAppSelector(state => state.appSlice);
  const isLogin = user?.user !== undefined;
  //   useGetUserById()
  return (
    <React.Fragment>
      <Header isLogin={isLogin ? true : false} />
      <main className='mx-auto flex min-h-screen max-w-[1980px] flex-col items-center justify-center overflow-x-hidden dark:bg-[#141523]'>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default LayoutWebsite;
