/**
 * a weak map of endpoints and number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * the maximum number of calls for an endpoints.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the number of call made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} - endpoint -  - The endpoint to make a request to.
 */
export default function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
