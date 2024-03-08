import { DropdownTypes } from "../../utils/types";

export type ILabType = {
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

export type ILabResponse = {
    labs: ILabType[]
}

export interface ProviderGroup {
    id: number;
    name: string;
}

export type IProviderGroupTransformResponse = {
    provider_group: ProviderGroup[];
    providerGroupDropdown: DropdownTypes[]
}

export interface ProviderUnit {
    id: number;
    name: string;
}

export type IProviderUnitTransformResponse = {
    provider_unit: ProviderUnit[];
    providerUnitDropdown: DropdownTypes[]
}


export interface Timezone {
    id: number;
    timezone: string;
}

export type IProviderTimezoneTransformResponse = {
    timezone: Timezone[];
    timezoneDropdown: DropdownTypes[]
}

export interface State {
    id: number;
    name: string;
}

export type IStateTransformResponse = {
    states: State[];
    stateDropdown: DropdownTypes[]
}


export interface City {
    id: number;
    name: string;
}

export type ICityTransformResponse = {
    cities: City[];
    cityDropdown: DropdownTypes[]
}

