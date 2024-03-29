import Link from 'next/link';
import { Menu } from 'lucide-react';
import dynamic from 'next/dynamic';
import React from 'react';
import { useRouter } from 'next/router';

import { ADMIN_MENU, ValidMenus } from '@/src/shared/constants/menu';
import { Button } from '@/src/shared/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/src/shared/components/ui/sheet';
import { MENULAYOUT } from '@/src/config/core';
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from '@/src/shared/components/ui/resizable';
import AccountSetting from '@/src/shared/components/common/admin/AccountSetting';
import { Horizontalbar } from './HorizontalBar';

const SideBarNav = dynamic(() => import('./SidebarNav'), { ssr: false });

const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <React.Fragment>
      {MENULAYOUT === 'vertical' && (
        <ResizablePanelGroup direction='horizontal' className='mt-0 flex h-full w-full'>
          <ResizablePanel
            defaultSize={15}
            className='sticky left-0 top-0 hidden h-[calc(100vh_-_65px)] min-w-[200px] flex-col overflow-y-auto bg-primary-foreground/5 p-4 md:block '
          >
            <div className='lg:hidden'>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className='lg:hidden' variant={'outline'} size={'sm'}>
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent className='w-[200px]' side={'left'}>
                  <SideBarNav menus={ValidMenus()} />
                </SheetContent>
              </Sheet>
            </div>
            <Link href='/' className='mb-12 flex items-center space-x-2'>
              <h1 className='w-[150px] h-[48px]'>SSUN</h1>
              {/* <LogoResponsive className='w-full object-cover' width={48} height={48} /> */}
            </Link>
            <SideBarNav menus={ValidMenus()} />
          </ResizablePanel>
          <ResizableHandle withHandle className='bg-[#DFD24C]' />
          <ResizablePanel defaultSize={85} className='h-full w-full'>
            <header className='sticky top-0 z-40 w-full border-b bg-[#E6D7BD]'>
              <div className='flex w-full items-center justify-between p-4'>
                <AccountSetting />
              </div>
            </header>
            <main className='flex flex-grow flex-wrap overflow-hidden py-2 pr-2 lg:py-12 lg:pr-12'>{children}</main>
          </ResizablePanel>
        </ResizablePanelGroup>
      )}
      {MENULAYOUT === 'horizontal' && (
        <React.Fragment>
          <header className='sticky top-0 z-40 w-full border-b bg-[#EBEBEB]'>
            <Horizontalbar menus={ADMIN_MENU} />
          </header>
          <div className='p-10'>
            <main className='w-full overflow-hidden p-2 lg:p-12'>{children}</main>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default LayoutAdmin;
