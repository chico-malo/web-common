import * as React from 'react'
import { Input, Form, Select } from 'antd'

export interface PayFormItemProps {
    title: string
    // antd的rule规则
    setRules?: string
    // 表单formItemrops
    itemProps: any
    // 表单props
    inputProps: any

    renderType?: any
}

/*
 * @Author: yyao
 * @Date: 2020-04-30 16:53:34
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 17:19:06
 * @Description: edu-form-item 二次封装antd表单
 */
export const RayFormItem = (config: PayFormItemProps) => {
    const { title, setRules = {}, itemProps, inputProps } = config
    const message = `请输入您的${title}!`
    const newInputProps = {
        placeholder: itemProps.label,
        ...inputProps,
    }

    const _renderFormItem = () => {
        const { renderType } = config
        if (renderType === 'select') {
            return <Select
                {...newInputProps}
                allowClear
            >
                <Select.Option value="male">male</Select.Option>
                <Select.Option value="female">female</Select.Option>
                <Select.Option value="other">other</Select.Option>
            </Select>
        }
        return <Input {...newInputProps} placeholder={title}/>
    }

    return (
        <Form.Item
            rules={[{ required: true, message, whitespace: true }, setRules]}
            {...itemProps}
        >
            {_renderFormItem()}
        </Form.Item>
    )
}
