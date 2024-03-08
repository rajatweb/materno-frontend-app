export type ILabAddForm = {
    name: string,
    providerGroup: string,
    providerUnit: number,
    address: string,
    state: string,
    city: string,
    zipcode: string,
    officePhone: number,
    mobile: number,
    email: string,
    timezone: string
}

export type DropdownTypes = {
    keyName: string | number | undefined;
    keyValue: string | number | undefined;
}

export type IRules = {
    required?: string | boolean;
};
