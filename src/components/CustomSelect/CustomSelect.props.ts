export interface ISelect {
    value: string;
    label: string;
    id: string;
}

export interface CustomSelectProps {
    options: ISelect[];
    placeholder: string;
    value?: ISelect;
    onChange: any;
    id: string;
    defaultValue?: ISelect;
    getOptionLabel: any;
}
