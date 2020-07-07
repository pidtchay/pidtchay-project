import { Form, Input, Button } from 'antd';
import * as React from 'react';
import { ILoginData } from 'Model/Authenticate';
import { ILiterals } from 'Model/Literals';
import style from 'Style/Login/LoginForm.less';
import { getI18nValue } from 'Utils/common';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};

/**
 * LogIn Form props.
 */
interface ILogInProps {
    initialData: ILoginData;
    literals: ILiterals;
    onSubmit: (loginData: ILoginData) => void;
}

/**
 * LogIn Form.
 *
 * @param [ILoginData] - InitialData - LogIn Data model.
 * @param [Function] - OnSubmit - submit action.
 * @param ILoginData.initialData
 * @param ILoginData.onSubmit
 * @param ILoginData.literals
 */
export const LoginForm: React.FC<ILogInProps> = ({
    initialData,
    onSubmit,
    literals
}) => {
    const [form] = Form.useForm();

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
                label={getI18nValue(literals, 'Forms.Login.nickname.label')}
                name="nickName"
                rules={[
                    {
                        required: true,
                        message: (
                            <>
                                {getI18nValue(
                                    literals,
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
                label={getI18nValue(literals, 'Forms.Login.email.label')}
                name="email"
                rules={[
                    {
                        required: true,
                        message: (
                            <>
                                {getI18nValue(
                                    literals,
                                    'Forms.Login.email.message'
                                )}
                            </>
                        ),
                        type: 'email'
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={getI18nValue(literals, 'Forms.Login.password.label')}
                name="password"
                rules={[
                    {
                        required: true,
                        message: (
                            <>
                                {getI18nValue(
                                    literals,
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
                    {getI18nValue(literals, 'ACTIONS.submit')}
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    {getI18nValue(literals, 'ACTIONS.reset')}
                </Button>
                <Button type="link" htmlType="button" onClick={onFill}>
                    {getI18nValue(literals, 'ACTIONS.fill_form')}
                </Button>
            </Form.Item>
        </Form>
    );
};
