/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Checks whether an element in a collection passes a test.
*
* @returns boolean indicating whether an element in a collection passes a test
*/
type Nullary<U> = ( this: U ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @returns boolean indicating whether an element in a collection passes a test
*/
type Unary<T, U> = ( this: U, value: T ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @returns boolean indicating whether an element in a collection passes a test
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Ternary<T, U> = ( this: U, value: T, index: number, collection: Collection<T> ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Predicate<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Tests whether a collection contains at least `n` elements which pass a test implemented by a predicate function.
*
* ## Notes
*
* -   The predicate function is provided three arguments:
*
*     -   `value`: collection value
*     -   `index`: collection index
*     -   `collection`: the input collection
*
* -   The function immediately returns upon finding `n` successful elements.
*
* -   If provided an empty collection, the function returns `false`.
*
* @param collection - input collection
* @param n - number of elements
* @param predicate - test function
* @param thisArg - execution context
* @throws second argument must be a positive integer
* @returns boolean indicating whether a collection contains at least `n` elements which pass a test
*
* @example
* function isNegative( v ) {
*     return ( v < 0 );
* }
*
* var arr = [ 1, 2, -3, 4, -1 ];
*
* var bool = someBy( arr, 2, isNegative );
* // returns true
*/
declare function someBy<T = unknown, U = unknown>( collection: Collection<T>, n: number, predicate: Predicate<T, U>, thisArg?: ThisParameterType<Predicate<T, U>> ): boolean;


// EXPORTS //

export = someBy;
