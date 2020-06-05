/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-28
 * 新增编辑表单
 */
import * as React from 'react'
import { Button, Form, Row, Space } from 'antd'
import { FormInstance } from 'antd/es/form'
import { FormProps } from 'antd/lib/form'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { ConfigProps, DynamicFormProps, RayFormItem } from '../Form'
import { lang } from '../../locales/zh-en'

// @ts-ignore
export interface UpdateFormProps extends FormProps {
    onSubmit: (values: any) => void;
    onReset: () => void;
    processing: boolean;
    fields: ConfigProps[]
}

export default class UpdateForm extends React.PureComponent <UpdateFormProps, any> {
    formRef = React.createRef<FormInstance>()

    onSubmit = (values: any) => {
        console.log('Received values of form: ', values)
        const { onSubmit } = this.props
        onSubmit(values)
    }

    onReset = () => {
        (this.formRef.current as any).resetFields()
        const { onReset } = this.props
        onReset()
    }

    /**
     * 渲染动态表单
     * @param dynamicName    动态表单name
     * @param dynamicField   动态表单配置
     * @param dynamicKey   动态表单配置
     * @param dynamicTitle   动态表单总标题
     * @param dynamicAddName   动态表单按钮名称
     * @private
     */
    _renderDynamicForm = ({ dynamicName, dynamicField, dynamicKey, dynamicTitle, dynamicAddName }: DynamicFormProps) => {
        return <Form.List name={dynamicName} key={dynamicKey}>
            {(fields, { add, remove }) => {
                return (
                    <div style={{ width: '100%' }}>
                        <h3>{dynamicTitle}</h3>
                        {fields.map(field => (
                            <Space key={field.key} style={{ display: 'flex' }} align="start">
                                {
                                    dynamicField.map((dynamicItem: ConfigProps, index) => {
                                        const { itemProps, ...other } = dynamicItem
                                        const name = (itemProps as any).name
                                        return RayFormItem({
                                            itemProps: {
                                                name: [field.name, name],
                                                ...itemProps,
                                                key: `${dynamicKey}_${index}`,
                                                fieldKey: [field.fieldKey, name],
                                            },
                                            ...other,
                                        })
                                    })
                                }
                                <MinusCircleOutlined
                                    onClick={() => {
                                        remove(field.name)
                                    }}
                                />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => {
                                    add()
                                }}
                                block
                            >
                                <PlusOutlined/> {dynamicAddName}
                            </Button>
                        </Form.Item>
                    </div>
                )
            }}
        </Form.List>
    }

    _renderFormItem = (fields: ConfigProps[]) => {
        return fields.map((item: ConfigProps, index) => {
            const { itemProps, dynamicField, config, ...other } = item
            const itemStyle = {
                width: '30%',
                marginLeft: 10,
            }
            if (dynamicField && dynamicField.length > 0) {
                return this._renderDynamicForm({ dynamicField, dynamicKey: index, ...(config as any) })
            }
            return RayFormItem({
                itemProps: {
                    style: itemStyle,
                    key: index,
                    ...(itemProps as any),
                },
                ...other,
            })
        })
    }

    render() {
        const { processing, fields, initialValues } = this.props
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        }
        return (
            <Form {...layout}
                  name="normal_login"
                  className="userCenter_form"
                  initialValues={initialValues}
                  onFinish={this.onSubmit}
                  ref={this.formRef}
                  key="login"
            >
                <Row className="form_content">
                    {this._renderFormItem(fields)}
                </Row>
                <Row justify="center">
                    <Button loading={processing} onClick={this.onReset} className="form_btn">
                        {lang.reset}
                    </Button>
                    <Button type="primary" htmlType="submit" loading={processing} className="form_btn">
                        {lang.submit}
                    </Button>
                </Row>
            </Form>
        )
    }
}
