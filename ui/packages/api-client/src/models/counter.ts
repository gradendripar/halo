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
import { Metadata } from './metadata';

/**
 * 
 * @export
 * @interface Counter
 */
export interface Counter {
    /**
     * 
     * @type {string}
     * @memberof Counter
     */
    'apiVersion': string;
    /**
     * 
     * @type {number}
     * @memberof Counter
     */
    'approvedComment'?: number;
    /**
     * 
     * @type {number}
     * @memberof Counter
     */
    'downvote'?: number;
    /**
     * 
     * @type {string}
     * @memberof Counter
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof Counter
     */
    'metadata': Metadata;
    /**
     * 
     * @type {number}
     * @memberof Counter
     */
    'totalComment'?: number;
    /**
     * 
     * @type {number}
     * @memberof Counter
     */
    'upvote'?: number;
    /**
     * 
     * @type {number}
     * @memberof Counter
     */
    'visit'?: number;
}

