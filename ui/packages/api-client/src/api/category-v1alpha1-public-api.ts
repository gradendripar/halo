/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.19.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { CategoryVo } from '../models';
// @ts-ignore
import { CategoryVoList } from '../models';
// @ts-ignore
import { ListedPostVoList } from '../models';
/**
 * CategoryV1alpha1PublicApi - axios parameter creator
 * @export
 */
export const CategoryV1alpha1PublicApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Lists categories.
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategories: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/api.content.halo.run/v1alpha1/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets category by name.
         * @param {string} name Category name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoryByName: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('queryCategoryByName', 'name', name)
            const localVarPath = `/apis/api.content.halo.run/v1alpha1/categories/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists posts by category name.
         * @param {string} name Category name
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryPostsByCategoryName: async (name: string, page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('queryPostsByCategoryName', 'name', name)
            const localVarPath = `/apis/api.content.halo.run/v1alpha1/categories/{name}/posts`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CategoryV1alpha1PublicApi - functional programming interface
 * @export
 */
export const CategoryV1alpha1PublicApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CategoryV1alpha1PublicApiAxiosParamCreator(configuration)
    return {
        /**
         * Lists categories.
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryCategories(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryVoList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryCategories(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoryV1alpha1PublicApi.queryCategories']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Gets category by name.
         * @param {string} name Category name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryCategoryByName(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryVo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryCategoryByName(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoryV1alpha1PublicApi.queryCategoryByName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists posts by category name.
         * @param {string} name Category name
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryPostsByCategoryName(name: string, page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListedPostVoList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryPostsByCategoryName(name, page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoryV1alpha1PublicApi.queryPostsByCategoryName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CategoryV1alpha1PublicApi - factory interface
 * @export
 */
export const CategoryV1alpha1PublicApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CategoryV1alpha1PublicApiFp(configuration)
    return {
        /**
         * Lists categories.
         * @param {CategoryV1alpha1PublicApiQueryCategoriesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategories(requestParameters: CategoryV1alpha1PublicApiQueryCategoriesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<CategoryVoList> {
            return localVarFp.queryCategories(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets category by name.
         * @param {CategoryV1alpha1PublicApiQueryCategoryByNameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoryByName(requestParameters: CategoryV1alpha1PublicApiQueryCategoryByNameRequest, options?: RawAxiosRequestConfig): AxiosPromise<CategoryVo> {
            return localVarFp.queryCategoryByName(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists posts by category name.
         * @param {CategoryV1alpha1PublicApiQueryPostsByCategoryNameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryPostsByCategoryName(requestParameters: CategoryV1alpha1PublicApiQueryPostsByCategoryNameRequest, options?: RawAxiosRequestConfig): AxiosPromise<ListedPostVoList> {
            return localVarFp.queryPostsByCategoryName(requestParameters.name, requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for queryCategories operation in CategoryV1alpha1PublicApi.
 * @export
 * @interface CategoryV1alpha1PublicApiQueryCategoriesRequest
 */
export interface CategoryV1alpha1PublicApiQueryCategoriesRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof CategoryV1alpha1PublicApiQueryCategories
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof CategoryV1alpha1PublicApiQueryCategories
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof CategoryV1alpha1PublicApiQueryCategories
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof CategoryV1alpha1PublicApiQueryCategories
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof CategoryV1alpha1PublicApiQueryCategories
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for queryCategoryByName operation in CategoryV1alpha1PublicApi.
 * @export
 * @interface CategoryV1alpha1PublicApiQueryCategoryByNameRequest
 */
export interface CategoryV1alpha1PublicApiQueryCategoryByNameRequest {
    /**
     * Category name
     * @type {string}
     * @memberof CategoryV1alpha1PublicApiQueryCategoryByName
     */
    readonly name: string
}

/**
 * Request parameters for queryPostsByCategoryName operation in CategoryV1alpha1PublicApi.
 * @export
 * @interface CategoryV1alpha1PublicApiQueryPostsByCategoryNameRequest
 */
export interface CategoryV1alpha1PublicApiQueryPostsByCategoryNameRequest {
    /**
     * Category name
     * @type {string}
     * @memberof CategoryV1alpha1PublicApiQueryPostsByCategoryName
     */
    readonly name: string

    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof CategoryV1alpha1PublicApiQueryPostsByCategoryName
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof CategoryV1alpha1PublicApiQueryPostsByCategoryName
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof CategoryV1alpha1PublicApiQueryPostsByCategoryName
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof CategoryV1alpha1PublicApiQueryPostsByCategoryName
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof CategoryV1alpha1PublicApiQueryPostsByCategoryName
     */
    readonly sort?: Array<string>
}

/**
 * CategoryV1alpha1PublicApi - object-oriented interface
 * @export
 * @class CategoryV1alpha1PublicApi
 * @extends {BaseAPI}
 */
export class CategoryV1alpha1PublicApi extends BaseAPI {
    /**
     * Lists categories.
     * @param {CategoryV1alpha1PublicApiQueryCategoriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryV1alpha1PublicApi
     */
    public queryCategories(requestParameters: CategoryV1alpha1PublicApiQueryCategoriesRequest = {}, options?: RawAxiosRequestConfig) {
        return CategoryV1alpha1PublicApiFp(this.configuration).queryCategories(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets category by name.
     * @param {CategoryV1alpha1PublicApiQueryCategoryByNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryV1alpha1PublicApi
     */
    public queryCategoryByName(requestParameters: CategoryV1alpha1PublicApiQueryCategoryByNameRequest, options?: RawAxiosRequestConfig) {
        return CategoryV1alpha1PublicApiFp(this.configuration).queryCategoryByName(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists posts by category name.
     * @param {CategoryV1alpha1PublicApiQueryPostsByCategoryNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryV1alpha1PublicApi
     */
    public queryPostsByCategoryName(requestParameters: CategoryV1alpha1PublicApiQueryPostsByCategoryNameRequest, options?: RawAxiosRequestConfig) {
        return CategoryV1alpha1PublicApiFp(this.configuration).queryPostsByCategoryName(requestParameters.name, requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }
}

