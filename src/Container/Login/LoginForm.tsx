import { Form, Input, Button } from 'antd';
import * as React from 'react';
import { ILoginData } from 'Model/Authenticate';
import style from 'Style/Login/LoginForm.less';
import { useLiteralValue } from 'Utils/hooks';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};

/**
 * LogIn Form props.
 */
interface ILogInProps {
    initialData: ILoginData;
    onSubmit: (loginData: ILoginData) => void;
}

// eslint-disable-next-line jsdoc/require-returns
/**
 * LogIn Form.
 *
 * @param {ILoginData} [initialData] - InitialData - LogIn Data model.
 * @param {Function} [onSubmit] - OnSubmit - submit action.
 */
export const LoginForm: React.FC<ILogInProps> = ({ initialData, onSubmit }) => {
    const [form] = Form.useForm();
    const { getValue: getLiteralValue } = useLiteralValue();

    const onFinish = (values) => {
        onSubmit({ ...values });
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue(initialData);
    };

    return (
        <Form
            {...layout}
            className={style.loginForm}
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                label={getLiteralValue('Forms.Login.nickname.label')}
                name="nickName"
                rules={[
                    {
                        required: true,
                        message: (
                            <>
                                {getLiteralValue(
                                    'Forms.Login.nickname.message'
                                )}
                            </>
                        )
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={getLiteralValue('Forms.Login.email.label')}
                name="email"
                rules={[
                    {
                        required: true,
                        message: (
                            <>{getLiteralValue('Forms.Login.email.message')}</>
                        ),
                        type: 'email'
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={getLiteralValue('Forms.Login.password.label')}
                name="password"
                rules={[
                    {
                        required: true,
                        message: (
                            <>
                                {getLiteralValue(
                                    'Forms.Login.password.message'
                                )}
                            </>
                        )
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    {getLiteralValue('ACTIONS.submit')}
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    {getLiteralValue('ACTIONS.reset')}
                </Button>
                <Button type="link" htmlType="button" onClick={onFill}>
                    {getLiteralValue('ACTIONS.fill_form')}
                </Button>
            </Form.Item>
        </Form>
    );
};
