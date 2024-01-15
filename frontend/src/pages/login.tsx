import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';

import InputText from '@/src/shared/components/custom/form/InputText';
import InputPassword from '@/src/shared/components/custom/form/InputPassword';
import { Button } from '@/src/shared/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/shared/components/ui/card';
import { Form } from '@/src/shared/components/ui/form';
import { Tabs, TabsContent } from '@/src/shared/components/ui/tabs';
import { useLogin } from '../schemas/services/auth';
import BlankLayout from '../shared/layout/BlankLayout';

const Login = () => {
  const formSchema = z.object({
    username: z
      .string({ required_error: 'Vui lòng điền tên đăng nhập' })
      .min(1, { message: 'Vui lòng điền tên đăng nhập' }),
    password: z.string({ required_error: 'Vui lòng điền mật khẩu' }).min(1, { message: 'Vui lòng điền mật khẩu' }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const doLogin = useLogin();
  function onSubmit(values: z.infer<typeof formSchema>) {
    doLogin.mutate(values);
  }
  return (
    <div className='relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative flex-col bg-muted p-10 text-white dark:border-r md:h-full lg:flex'>
        <div className='login-background absolute inset-0 bg-[url("/images/backgroundLogin.jpg")] bg-cover bg-no-repeat' />

        <div className='relative z-20 mt-auto'>
          <h1 className='flex w-full items-center justify-start gap-4 text-4xl font-semibold tracking-tight text-[#FF9900]'>
            <div>S</div>
            <div>S</div>
            <div>U</div>
            <div>N</div>
          </h1>
          <p className='mt-4 text-lg text-orange-400'>
            CLB Khiêu vũ Ssun được thành lập năm 2023, với tiêu chí đặt khách hàng lên hàng đầu, chúng tôi sẽ cho bạn
            trải nghiệm tuyệt vời nhất
          </p>
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>Copyright &copy; 2024 SSUN. Powered by Hong Ngan</p>
          </blockquote>
        </div>
      </div>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[440px]'>
          <Tabs defaultValue='merchant' className='mx-auto mt-4 w-[440px]'>
            <TabsContent value='merchant'>
              <div className='relative z-20 mb-10 flex w-full items-center justify-center text-lg font-medium'>
                Welcome to SSUN CLUB
              </div>
              <Card className='w-[440px]'>
                <CardHeader>
                  <CardTitle>Đăng nhập</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      <div className='grid w-full items-center gap-4'>
                        <InputText form={form} fieldName='username' label='Tên đăng nhập' placeHolder='@ngs.com.vn' />
                        <InputPassword
                          form={form}
                          fieldName='password'
                          label='Mật khẩu'
                          inputProps={{ type: 'password' }}
                        />
                        <div className='my-2 flex flex-col items-start'>
                          {/* <InputCheckBox /> */}
                          <Button variant='link' type='button' disabled className='h-auto p-0'>
                            Chưa có tài khoản
                          </Button>
                        </div>
                      </div>
                      <div className='flex justify-between'>
                        <Button className='flex w-full gap-2' type='submit'>
                          {doLogin.isLoading && <Loader2 size={16} className='animate-spin' />} Đăng nhập
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

Login.getLayout = (children: React.ReactNode) => <BlankLayout>{children}</BlankLayout>;

export default Login;
