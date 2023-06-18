import Select from 'react-select';

interface ISelect {
    value: string;
    label: string;
    id: string;
}

interface CustomSelectProps {
    options: ISelect[];
    placeholder: string;
    value?: ISelect;
    onChange: any;
    id: string;
    defaultValue?: ISelect;
    getOptionLabel: any;
}

function CustomSelect(props: CustomSelectProps) {
    const customStyles = {
        placeholder: (provided: any) => ({
            ...provided,
            color: 'rgba(0, 0, 0, 0.48)',
            fontSize: '14px',
            lineHeight: '20px',
        }),
        control: (provided: any) => ({
            ...provided,
            minHeight: '44px',
        }),
    };
    return (
        <Select
            styles={customStyles}
            options={props.options}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            getOptionLabel={props.getOptionLabel}
            id={props.id}
            defaultValue={props.defaultValue}
        />
    );
}

export { CustomSelect };
