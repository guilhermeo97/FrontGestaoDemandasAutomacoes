import { useController, UseControllerProps } from "react-hook-form";
import React from "react";
import { LoginType } from '@/types/Login';

export const InputsLogin = (props: UseControllerProps<LoginType>) => {
    const { field, fieldState } = useController(props);

    return (
        <div>
            <input className={`input-text border ${fieldState.invalid ? 'border-red': 'border-white'} p-3`}
                {...field}
                placeholder={props.name}
            />
            {fieldState.error && <div>{fieldState.error.message}</div>}
        </div>
    )
}