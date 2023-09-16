export interface IPlan{
    id: string,
    name: string,
    desc: string,
    price: number,
    salePrice?: number,
    image_url: string
}

export interface ITypeAction<T> {
    Type: T;
    Action: Function;
}

export interface ISpinner{
    optionalStyles?: string;
}

export interface IDefaultButton {
    title: string;
    type: "primary" | "secondary";
    disabled?: boolean;
    onClick?: () => void;
    loading?: boolean;
    width?: number;
}
  