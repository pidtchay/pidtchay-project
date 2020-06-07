import * as React from 'react';
import { ILoginData } from 'Model/Authenticate';
import style from 'Style/LogInForm.less';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

/**
 * LogIn Form props
 */
interface ILogInProps {
  initialData: ILoginData;
  onSubmit: (loginData: ILoginData) => void;
}

/**
 * LogIn Form
 * @param [ILoginData] initialData - LogIn Data model.
 * @param [Function] onSubmit - submit action.
 */
export const LoginForm: React.FC<ILogInProps> = ({ initialData, onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    onSubmit({ ...values });
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue(initialData);
  };

  return (
        <Form {...layout} className={style.loginForm} form={form} onFinish={onFinish}>
            <Form.Item
                    label='Nickname'
                    name='nickName'
                    rules={[{ required: true, message: 'Please input your nickname!' }]}
                >
                <Input/>
            </Form.Item>
            <Form.Item
                    label='Email'
                    name='email'
                    rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                >
                <Input/>
            </Form.Item>
            <Form.Item
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input.Password/>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
                <Button htmlType='button' onClick={onReset}>
                    Reset
                </Button>
                <Button type='link' htmlType='button' onClick={onFill}>
                    Fill form
                </Button>
            </Form.Item>
        </Form>
  );
};
