import Select from 'react-select';

function CustomSelect(props) {
    const customStyles = {
        placeholder: (provided) => ({
            ...provided,
            color: 'rgba(0, 0, 0, 0.48)',
            fontSize: '14px',
            lineHeight: '20px',
        }),
        control: (provided) => ({
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
        />
    );
}

export { CustomSelect };
