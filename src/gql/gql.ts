/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGet {\n  categories {\n    name\n  }\n}": types.CategoriesGetDocument,
    "fragment ProductDetails on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductDetailsFragmentDoc,
    "fragment Product on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductFragmentDoc,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetails\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGet($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...Product\n  }\n}": types.ProductsGetDocument,
    "query ProductsGetByCategorySlug($first: Int!, $skip: Int!, $slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: $first, skip: $skip) {\n      ...Product\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetSimilar($slug: String!) {\n  products(first: 4, where: {categories_some: {slug: $slug}}) {\n    ...Product\n  }\n}": types.ProductsGetSimilarDocument,
    "query ProductsGetTotalCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetTotalCountDocument,
    "query ProductsGetTotalCountByCategorySlug($slug: String!) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetTotalCountByCategorySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGet {\n  categories {\n    name\n  }\n}"): typeof import('./graphql').CategoriesGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Product on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetails\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGet($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductsGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($first: Int!, $skip: Int!, $slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: $first, skip: $skip) {\n      ...Product\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSimilar($slug: String!) {\n  products(first: 4, where: {categories_some: {slug: $slug}}) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductsGetSimilarDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetTotalCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetTotalCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetTotalCountByCategorySlug($slug: String!) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetTotalCountByCategorySlugDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
