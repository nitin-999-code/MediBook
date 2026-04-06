import { createApi, retry } from '@reduxjs/toolkit/query/react'
import { tagTypeList } from '../tag-types'
import { axiosBaseQuery } from '../../helpers/axios/axiosBaseQuery'
import { getBaseUrl } from '../../helpers/config/envConfig'

const baseQueryWithRetry = retry(axiosBaseQuery({ baseUrl: getBaseUrl() }), { maxRetries: 1 });

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithRetry,
    keepUnusedDataFor: 600,
    refetchOnMountOrArgChange: 300,
    endpoints: () => ({}),
    tagTypes: tagTypeList
})