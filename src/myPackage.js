// 타입스크립트가 자바스크립트 파일을 확인할 수 있게 한다.
// @ts-check

// JSDoc : 이 코드를 타입스크립트가 읽고 타입을 확인해 준다.
/**
 * 설명 : Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */

export function init(config) {
  return true;
}

/**
 * 설명 : Exits the program
 * @param {number} code
 * @returns number
 */

export function exit(code) {
  return code + 1;
}
