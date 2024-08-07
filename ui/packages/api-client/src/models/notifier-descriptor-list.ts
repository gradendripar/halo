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


// May contain unused imports in some cases
// @ts-ignore
import { NotifierDescriptor } from './notifier-descriptor';

/**
 * 
 * @export
 * @interface NotifierDescriptorList
 */
export interface NotifierDescriptorList {
    /**
     * Indicates whether current page is the first page.
     * @type {boolean}
     * @memberof NotifierDescriptorList
     */
    'first': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof NotifierDescriptorList
     */
    'hasNext': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof NotifierDescriptorList
     */
    'hasPrevious': boolean;
    /**
     * A chunk of items.
     * @type {Array<NotifierDescriptor>}
     * @memberof NotifierDescriptorList
     */
    'items': Array<NotifierDescriptor>;
    /**
     * Indicates whether current page is the last page.
     * @type {boolean}
     * @memberof NotifierDescriptorList
     */
    'last': boolean;
    /**
     * Page number, starts from 1. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof NotifierDescriptorList
     */
    'page': number;
    /**
     * Size of each page. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof NotifierDescriptorList
     */
    'size': number;
    /**
     * Total elements.
     * @type {number}
     * @memberof NotifierDescriptorList
     */
    'total': number;
    /**
     * Indicates total pages.
     * @type {number}
     * @memberof NotifierDescriptorList
     */
    'totalPages': number;
}

