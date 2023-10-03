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
    "query CategoriesGet {\n  categories {\n    ...Category\n  }\n}": types.CategoriesGetDocument,
    "fragment Category on Category {\n  name\n  slug\n}": types.CategoryFragmentDoc,
    "query CategoryGetBySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    ...Category\n  }\n}": types.CategoryGetBySlugDocument,
    "fragment Collection on Collection {\n  id\n  name\n  description\n  image {\n    url\n  }\n  slug\n}": types.CollectionFragmentDoc,
    "query CollectionGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...Collection\n  }\n}": types.CollectionGetBySlugDocument,
    "query CollectionsGet {\n  collections {\n    ...Collection\n  }\n}": types.CollectionsGetDocument,
    "fragment ProductDetails on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n    slug\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductDetailsFragmentDoc,
    "fragment Product on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n    slug\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  reviews {\n    rating\n  }\n}": types.ProductFragmentDoc,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetails\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGet($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...Product\n  }\n}": types.ProductsGetDocument,
    "query ProductsGetByCategorySlug($first: Int!, $skip: Int!, $slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: $first, skip: $skip) {\n      ...Product\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    products {\n      ...Product\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetSearch($first: Int!, $skip: Int!, $searchTerm: String) {\n  products(\n    first: $first\n    skip: $skip\n    where: {OR: [{name_contains: $searchTerm}, {categories_some: {name_contains: $searchTerm}}]}\n  ) {\n    ...Product\n  }\n}": types.ProductsGetSearchDocument,
    "query ProductsGetSearchTotalCount($searchTerm: String) {\n  productsConnection(\n    where: {OR: [{name_contains: $searchTerm}, {categories_some: {name_contains: $searchTerm}}]}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetSearchTotalCountDocument,
    "query ProductsGetSimilar($slug: String!) {\n  products(first: 4, where: {categories_some: {slug: $slug}}) {\n    ...Product\n  }\n}": types.ProductsGetSimilarDocument,
    "query ProductsGetSuggested {\n  products {\n    ...Product\n  }\n}": types.ProductsGetSuggestedDocument,
    "query ProductsGetTotalCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetTotalCountDocument,
    "query ProductsGetTotalCountByCategorySlug($slug: String!) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetTotalCountByCategorySlugDocument,
    "query VariantsGetProduct {\n  productSizeColorVariants {\n    color\n    size\n    product {\n      id\n    }\n  }\n}": types.VariantsGetProductDocument,
    "query VariantsGetProductColor {\n  productColorVariants {\n    color\n    product {\n      id\n    }\n  }\n}": types.VariantsGetProductColorDocument,
    "query VariantsGetProductSize {\n  productSizeVariants {\n    size\n    product {\n      id\n    }\n  }\n}": types.VariantsGetProductSizeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGet {\n  categories {\n    ...Category\n  }\n}"): typeof import('./graphql').CategoriesGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Category on Category {\n  name\n  slug\n}"): typeof import('./graphql').CategoryFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    ...Category\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Collection on Collection {\n  id\n  name\n  description\n  image {\n    url\n  }\n  slug\n}"): typeof import('./graphql').CollectionFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...Collection\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGet {\n  collections {\n    ...Collection\n  }\n}"): typeof import('./graphql').CollectionsGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n    slug\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Product on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n    slug\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  reviews {\n    rating\n  }\n}"): typeof import('./graphql').ProductFragmentDoc;
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
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    products {\n      ...Product\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSearch($first: Int!, $skip: Int!, $searchTerm: String) {\n  products(\n    first: $first\n    skip: $skip\n    where: {OR: [{name_contains: $searchTerm}, {categories_some: {name_contains: $searchTerm}}]}\n  ) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductsGetSearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSearchTotalCount($searchTerm: String) {\n  productsConnection(\n    where: {OR: [{name_contains: $searchTerm}, {categories_some: {name_contains: $searchTerm}}]}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetSearchTotalCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSimilar($slug: String!) {\n  products(first: 4, where: {categories_some: {slug: $slug}}) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductsGetSimilarDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSuggested {\n  products {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductsGetSuggestedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetTotalCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetTotalCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetTotalCountByCategorySlug($slug: String!) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetTotalCountByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query VariantsGetProduct {\n  productSizeColorVariants {\n    color\n    size\n    product {\n      id\n    }\n  }\n}"): typeof import('./graphql').VariantsGetProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query VariantsGetProductColor {\n  productColorVariants {\n    color\n    product {\n      id\n    }\n  }\n}"): typeof import('./graphql').VariantsGetProductColorDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query VariantsGetProductSize {\n  productSizeVariants {\n    size\n    product {\n      id\n    }\n  }\n}"): typeof import('./graphql').VariantsGetProductSizeDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
