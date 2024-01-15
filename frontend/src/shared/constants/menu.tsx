import { CalendarDays, LucideUserSquare, Package2, Receipt, Users } from 'lucide-react';

export type MenuItem = {
  title: string;
  permission?: boolean;
  external?: boolean;
  href: string;
  Icon?: React.ReactNode;
  chidren?: MenuItem[];
  isDisable?: boolean;
};
export const menu = [
  {
    id: 1,
    title: 'Trang chủ',
    path: '/',
    menuChild: [],
  },
  {
    id: 2,
    title: 'Giới thiệu',
    path: '/introduction',
    menuChild: [],
  },
  {
    id: 3,
    title: 'Giảng viên',
    path: '/teacher',
    menuChild: [],
  },
  {
    id: 4,
    title: 'Gói tập',
    path: '/service',
    menuChild: [
      {
        title: 'Mới nhất',
        path: '/service/new',
        menuChild: [],
      },
      {
        title: 'Tất cả',
        path: '/service/all',
        menuChild: [],
      },
    ],
  },
  {
    id: 5,
    title: 'Liên hệ',
    path: '/contact',
    menuChild: [],
  },
];
export const ADMIN_MENU: MenuItem[] = [
  {
    title: 'Quản lý khách hàng',
    href: '/customer',
    Icon: <Users className='mr-2 h-5 w-5' />,
    chidren: [],
  },
  {
    title: 'Quản lý giảng viên',
    href: '/teacher',
    Icon: <LucideUserSquare className='mr-2 h-5 w-5' />,
    chidren: [],
  },
  {
    title: 'Quản lý gói tập',
    href: '/service',
    Icon: <Package2 className='mr-2 h-5 w-5' />,
    chidren: [],
  },
  {
    title: 'Quản lý lịch đặt',
    href: '/schedule',
    Icon: <CalendarDays className='mr-2 h-5 w-5' />,
    chidren: [],
  },
  {
    title: 'Quản lý hoá đơn',
    href: '/bill',
    // isDisable: true,
    Icon: <Receipt className='mr-2 h-5 w-5' />,
    chidren: [],
  },
];

export function ValidMenus() {
  return ADMIN_MENU;
}
