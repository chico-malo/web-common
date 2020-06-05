/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-25
 */
import * as React from 'react'
import { Select } from 'antd'

export interface RayFormSelectProps {
    options: object[]
    // 设置label
    setLabel?: (option: any) => void
    // 设置value
    setValue?: (option: any) => void
}

export const RayFormSelect = ({ options, setLabel, setValue, ...other }: RayFormSelectProps) => {
    // const [visible, setVisible] = useState(false);
    return (
        <Select
            allowClear
            {...other}
        >
            {
                options.map((option: any, index) => {
                    const value = setValue ? setValue(option) : option.value
                    const label = setLabel ? setLabel(option) : option.label
                    return <Select.Option value={value} key={index}>{label}</Select.Option>
                })
            }
        </Select>
    )
}
