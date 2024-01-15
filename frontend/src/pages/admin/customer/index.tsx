import { useGetListCustomer } from '@/src/schemas/services/customer';
import HeadPage from '@/src/shared/components/common/admin/HeadPage';
import LayoutAdmin from '@/src/shared/layout/LayoutAdmin';

const CustomerPage = () => {
  const { data, tableConfig, getFieldValueOnSearchParam, onChangeMultiSearchParams } = useGetListCustomer();
  return (
    <div className='mx-auto flex w-full flex-col items-center justify-center gap-8 px-8'>
      {/* //Head */}
      <HeadPage
        title='Khách hàng'
        breadcrumbs={[
          { title: 'Khách hàng', url: '/customer' },
        ]}
        createInfo={{
          title: 'Tạo khách hàng',
          href: '/admin/crm/individual_customers/create',
        }}
      />
      {/* //Table */}
      <TableCustomer
        TABLE_NAME={'CUSTOMER'}
        data={data?.data || []}
        tableConfig={tableConfig}
        getFieldValueOnSearchParam={getFieldValueOnSearchParam}
      />
    </div>
  );
};
CustomerPage.getLayout = (children: React.ReactNode) => <LayoutAdmin>{children}</LayoutAdmin>;
export default CustomerPage;
