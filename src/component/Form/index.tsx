/*
 * @Author: yyao
 * @Date: 2020-04-30 16:53:34
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 17:19:06
 * @Description: edu-form-item 二次封装antd表单
 */
import React from 'react'
import { DatePicker, Form, Input } from 'antd'
import { RayFormSelect } from './RayFormSelect'
import { FormItemProps } from 'antd/lib/form'
import objectPath from 'object-path';


// @ts-ignore
export interface ConfigItemProps extends FormItemProps {
    key?: string | number,
    children?: any,
    name: any,
    fieldKey?: any
}

export interface DynamicFormProps {
    dynamicName: string,
    dynamicField: ConfigProps[],
    dynamicKey: string | number,
    dynamicTitle: string,
    dynamicAddName: string
}

export interface ConfigProps {
    // formItemProps
    itemProps?: ConfigItemProps,
    // 输入框props 具体值得看是什么类型
    inputProps?: any,

    // 统一设置是否必传
    required?: boolean,

    //
    renderType?: string,
    render?: (record: any) => any,

    dynamicField?: ConfigProps[],
    config?: DynamicFormProps
}

export const RayFormItem = (config: ConfigProps) => {
    const { itemProps = {}, inputProps, required = true } = config
    const label = objectPath.get(itemProps, 'label')
    const message = `请输入您的${label}!`

    const newInputProps = {
        placeholder: label,
        ...inputProps,
    }

    const _renderFormItem = () => {
        const { renderType, render } = config
        // 自定义render
        if (render) {
            return render(newInputProps)
        }
        // select下拉
        if (renderType === 'select') {
            return <RayFormSelect {...newInputProps}/>
        }
        // 年月日
        if (renderType === 'date') {
            return <DatePicker {...newInputProps}/>
        }
        // 密码
        if (renderType === 'password') {
            return <Input.Password {...newInputProps}/>
        }
        return <Input {...newInputProps}/>
    }

    return (
        <Form.Item
            rules={[{ required, message, whitespace: true }]}
            {...itemProps}
        >
            {_renderFormItem()}
        </Form.Item>
    )
}
