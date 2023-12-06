import React, {useMemo} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimezoneSelect from 'react-timezone-select';

export function InputBoxComponent(props){
    const {placeholder,disabled, inputType, options, onChange, backgroundColor = '', defaultValue} = props;
    const {register, validationSchema = {}, name = ''} = props;
    const InputElement = useMemo(() => {
        switch(inputType){
            case 'number': {
                if (register){
                    return <input
                        className={`${backgroundColor} border-0 w-full outline-0 focus:ring-0 outline-none text-gray-700 placeholder:text-secondary text-sm p-0`}
                        type="number"
                        placeholder={placeholder}
                        onChange={onChange}
                        {...register(name, validationSchema)}
                        disabled={disabled}
                    /> }else{
                    return <input
                        className={`${backgroundColor} border-0 w-full outline-0 focus:ring-0 outline-none text-gray-700 placeholder:text-secondary text-sm p-0`}
                        type="number"
                        placeholder={placeholder}
                        onChange={onChange}
                        disabled={disabled}
                    />
                }
            }
            case 'textarea': {
                if (register) {
                    return <textarea
                        className={`${backgroundColor} border-0 w-full outline-0 focus:ring-0 outline-none text-gray-700 placeholder:text-secondary text-sm `}
                        rows={5}
                        onChange={onChange}
                        defaultValue={defaultValue}
                        {...register(name, validationSchema)}
                    />
                } else {
                    return <textarea
                        className={`${backgroundColor} border-0 w-full outline-0 focus:ring-0 outline-none text-gray-700 placeholder:text-secondary text-sm`}
                        rows={5}
                        onChange={onChange}
                        defaultValue={defaultValue}
                    />
                }
            }
            case 'select':{
                if (register) {
                    return <select
                        className={`${backgroundColor} w-full outline-0 focus:ring-0 outline-none text-gray-700 placeholder:text-secondary text-sm p-0`}
                        placeholder={placeholder}
                        {...register(name, validationSchema)}
                        onChange={onChange}
                    >
                        {options?.map((option,index) => <option key={index} value={option.value}>{option.name}</option> )}
                    </select>
                } else {
                    return <select
                        className={`${backgroundColor}  w-full outline-0 focus:ring-0 outline-none text-gray-700 placeholder:text-secondary text-sm p-0`}
                        placeholder={placeholder}
                        onChange={onChange}
                    >
                        {options?.map((option,index) => <option key={index} value={option.value}>{option.name}</option> )}
                    </select>
                }

            }
            case 'datepicker':{
                if (register) {
                    return <DatePicker
                        className={`${backgroundColor} border-0 w-full outline-0 focus:ring-0 outline-none text-gray-700 placeholder:text-secondary text-sm p-0`}
                        dateFormat="MMMM dd yyyy, hh:mm a"
                        onChange={onChange}
                        showTimeInput={true}
                        timeInputLabel="Time"
                        selected={defaultValue}
                        {...register(name, validationSchema)}
                    />
                } else {
                    return <DatePicker
                        className={`${backgroundColor} border-0 w-full outline-0 focus:ring-0 outline-none text-gray-700 placeholder:text-secondary text-sm p-0`}
                        dateFormat="MMMM dd yyyy, hh:mm a"
                        onChange={onChange}
                        showTimeInput={true}
                        timeInputLabel="Time"
                        selected={defaultValue}
                    />
                }
            }
            case 'timezoneSelect':{
                if(register) {
                    return <TimezoneSelect
                        className={`${backgroundColor} border-0 w-full outline-0 focus:ring-0 outline-none text-gray-700 placeholder:text-secondary text-sm p-0`}
                        onChange={onChange}
                        value={defaultValue}
                        {...register(name, validationSchema)}
                    />
                } else {
                    return <TimezoneSelect
                        className={`${backgroundColor} border-0 w-full outline-0 focus:ring-0 outline-none text-gray-700 placeholder:text-secondary text-sm p-0`}
                        onChange={onChange}
                        value={defaultValue}
                    />
                }
            }
            case 'email': {
                if(register) {
                    return <input
                        className={`${backgroundColor}  border-0 w-full outline-0 focus:ring-0 outline-none text-gray-700 placeholder:text-secondary text-sm p-0`}
                        type="email"
                        placeholder={placeholder}
                        onChange={onChange}
                        {...register(name, validationSchema)}
                        disabled={disabled}
                    />
                } else {
                    return <input
                        className={`${backgroundColor} border-0 w-full outline-0 outline-none focus:ring-0 text-gray-700 placeholder:text-secondary text-sm p-0`}
                        type="email"
                        placeholder={placeholder}
                        onChange={onChange}
                        disabled={disabled}
                        defaultValue={defaultValue}
                    />
                }
            }
            case 'password': {
                if(register) {
                    return <input
                        className={`${backgroundColor} border-0 w-full outline-0 outline-none focus:ring-0 text-gray-700 placeholder:text-secondary text-sm p-0`}
                        type="password"
                        placeholder={placeholder}
                        onChange={onChange}
                        {...register(name, validationSchema)}
                        disabled={disabled}
                    />
                } else {
                    return <input
                        className={`${backgroundColor} border-0 w-full outline-0 outline-none focus:ring-0 text-gray-700 placeholder:text-secondary text-sm p-0`}
                        type="password"
                        placeholder={placeholder}
                        onChange={onChange}
                        disabled={disabled}
                        defaultValue={defaultValue}
                    />
                }
            }
            case 'url': {
                if(register) {
                    return <input
                        className={`${backgroundColor} border-0 w-full outline-0 outline-none focus:ring-0 text-gray-700 placeholder:text-secondary text-sm p-0`}
                        type="url"
                        placeholder={placeholder}
                        onChange={onChange}
                        {...register(name, validationSchema)}
                        disabled={disabled}
                    />
                } else {
                    return <input
                        className={`${backgroundColor} border-0 w-full outline-0 outline-none focus:ring-0 text-gray-700 placeholder:text-secondary text-sm p-0`}
                        type="url"
                        placeholder={placeholder}
                        onChange={onChange}
                        disabled={disabled}
                        defaultValue={defaultValue}
                    />
                }
            }

            default: {
                if(register) {
                    return <input
                        className={`${backgroundColor} border-0 w-full outline-0 focus:ring-0 outline-none text-gray-700 placeholder:text-secondary text-sm p-0`}
                        type="text"
                        placeholder={placeholder}
                        onChange={onChange}
                        {...register(name, validationSchema)}
                        disabled={disabled}
                    />
                } else {
                    return <input
                        className={`${backgroundColor} border-0 w-full outline-0 outline-none focus:ring-0 text-gray-700 placeholder:text-secondary text-sm p-0`}
                        type="text"
                        placeholder={placeholder}
                        onChange={onChange}
                        disabled={disabled}
                        defaultValue={defaultValue}
                    />
                }

            }
        }
    }, [inputType, defaultValue]);
    return(
        <fieldset
            className={`${props.id} ${props.size}  ${props.backgroundColor} ${props.borderColor} block border border-gray-300 pt-0 rounded-md flex items-center font-poppins shadow-sm`}>
            <legend className={`${props.color} flex justify-start text-sm ${props.font} p-1`}>
                {props.label}</legend>
            <div className="flex mr-2">{props.Icon} </div>
            { props?.preText && <label className="text-gray-400 text-sm font-bold focus:outline-0">{props.preText} </label>}
            { InputElement }
            {props.Icon1}
        </fieldset>
    )
}
