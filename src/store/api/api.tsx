import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ICityTransformResponse,
  IProviderGroupTransformResponse,
  IProviderTimezoneTransformResponse,
  IProviderUnitTransformResponse,
  IStateTransformResponse,
} from "../types/apiTypes";

import { ILabAddForm } from "../../utils/types";


export const Api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  tagTypes: ["api"],
  endpoints: (builder) => ({
    getProviderGroup: builder.query<IProviderGroupTransformResponse, unknown>({
      query: () => "/provider_group",
      transformResponse: (response: IProviderGroupTransformResponse) => {
        const transformResponse: IProviderGroupTransformResponse = {
          ...response,
          providerGroupDropdown: response.provider_group.map((item) => ({
            keyName: item.name,
            keyValue: item.id,
          })),
        };

        return transformResponse;
      },
    }),

    getProviderUnit: builder.query<IProviderUnitTransformResponse, unknown>({
      query: () => "/provider_unit",
      transformResponse: (response: IProviderUnitTransformResponse) => {
        const transformResponse: IProviderUnitTransformResponse = {
          ...response,
          providerUnitDropdown: response.provider_unit.map((item) => ({
            keyName: item.name,
            keyValue: item.id,
          })),
        };

        return transformResponse;
      },
    }),

    getTimeZone: builder.query<IProviderTimezoneTransformResponse, unknown>({
      query: () => "/timezone",
      transformResponse: (response: IProviderTimezoneTransformResponse) => {
        const transformResponse: IProviderTimezoneTransformResponse = {
          ...response,
          timezoneDropdown: response.timezone.map((item) => ({
            keyName: item.timezone,
            keyValue: item.id,
          })),
        };

        return transformResponse;
      },
    }),

    getStates: builder.query<IStateTransformResponse, unknown>({
      query: () => "/states",
      transformResponse: (response: IStateTransformResponse) => {
        const transformResponse: IStateTransformResponse = {
          ...response,
          stateDropdown: response.states.map((item) => ({
            keyName: item.name,
            keyValue: item.id,
          })),
        };

        return transformResponse;
      },
    }),

    getCities: builder.query<ICityTransformResponse, unknown>({
      query: () => "/cities",
      transformResponse: (response: ICityTransformResponse) => {
        const transformResponse: ICityTransformResponse = {
          ...response,
          cityDropdown: response.cities.map((item) => ({
            keyName: item.name,
            keyValue: item.id,
          })),
        };

        return transformResponse;
      },
    }),

    addLab: builder.mutation<unknown, ILabAddForm>({
      query: (payload: ILabAddForm) => ({
        url: "/addLab",
        method: "POST",
        body: payload,
      })
    }),
  }),
});

// Auto-generated hooks
export const {
  useGetProviderGroupQuery,
  useGetProviderUnitQuery,
  useGetTimeZoneQuery,
  useGetStatesQuery,
  useGetCitiesQuery,
  useAddLabMutation
} = Api;
