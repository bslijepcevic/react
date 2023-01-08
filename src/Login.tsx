import { Form, Button, Input } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions, getIsLoggedIn } from "./Authorization";

import "./Login.css";

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn);

    const onFinish = () => {
        dispatch(authActions.setIsLoggedIn());
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/fetch");
        }
    }, [isLoggedIn, navigate]);

    return (
        <div className="formContainer">
            <Form
                name="basic"
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 24,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                        {
                            type: 'email',
                            message: 'Please input a valid email address',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                        {
                            min: 6,
                            message: "Your password must be at least 6 characters long",
                        },
                        {
                            pattern: /(?=.*[a-z])(?=.*[A-Z])/,
                            message: "Your password must contain at least one uppercase letter and one lowercase letter",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;