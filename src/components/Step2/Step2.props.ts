export interface Step2Props {
    setActive: (value: number) => void;
}

export interface FormValues {
    radio: string;
    checkbox: number[];
    advantages: { name: string }[];
}
