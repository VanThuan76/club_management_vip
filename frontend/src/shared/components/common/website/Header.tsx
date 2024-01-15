import { menu } from '@/src/shared/constants/menu';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '../../ui/navigation-menu';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  isLogin: boolean;
};
const Header = ({ isLogin }: Props) => {
  const { pathname } = useRouter();
  return (
    <header className='grid w-full grid-cols-1 items-center justify-center gap-3 px-4 py-3'>
      <div className='grid w-full grid-cols-9 items-start justify-center gap-6'>
        <h1 className='font-inter col-span-3 text-2xl font-normal text-black'>S S U N</h1>
        <div className='col-span-6 grid w-full grid-cols-6 items-start justify-center gap-3'>
          <Input
            placeholder='Nhập thông tin bạn cần tìm kiếm'
            className='col-span-5 border-b border-b-slate-400 px-4'
          />
          <Button className='col-span-1 bg-[#FF9900] p-2 hover:bg-[#fa8c47]'>Đặt lịch</Button>
          {/* Menu */}
          <div className='col-span-6 w-full'>
          <NavigationMenu className='NavigationMenuRoot'>
            <NavigationMenuList className='NavigationMenuList'>
              {menu.map((mainMenu, idx) => (
                <div key={idx}>
                  {mainMenu.menuChild.length === 0 ? (
                    <NavigationMenuItem>
                      <Link href={mainMenu.path as string} legacyBehavior passHref>
                        <NavigationMenuLink
                          style={{
                            color: `${'/' + pathname.split('/')[1] === mainMenu.path ? '#FF9900' : ''}`,
                            backgroundColor: 'transparent',
                          }}
                          className={navigationMenuTriggerStyle()}
                        >
                          <p>{mainMenu.title}</p>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem className='cursor-pointer'>
                      <NavigationMenuTrigger
                        style={{
                          color: `${'/' + pathname.split('/')[1] === mainMenu.path ? '#FF9900' : ''}`,
                          backgroundColor: 'transparent',
                        }}
                        className='NavigationMenuTrigger'
                      >
                        {mainMenu.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='NavigationMenuContent'>
                        <div className='List one'>
                          <div className='flex w-full flex-col items-start justify-start gap-5 border-r-2 border-r-slate-200 px-8 pt-4'>
                            {mainMenu.menuChild.map((menuChild2, idx) => {
                              return (
                                <div className='w-full' key={idx}>
                                  {menuChild2.title !== '' ? (
                                    <div
                                      style={{
                                        borderBottom: '1px solid #E8E8E8',
                                      }}
                                      className='relative flex w-full cursor-pointer items-start justify-between pb-6'
                                    >
                                      <p>{menuChild2.title}</p>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )}
                </div>
              ))}
              <NavigationMenuIndicator className='NavigationMenuIndicator'>
                <div className='Arrow' />
              </NavigationMenuIndicator>
            </NavigationMenuList>
            <div className='ViewportPosition'>
              <NavigationMenuViewport className='NavigationMenuViewport' />
            </div>
          </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
