import { tokens, FontTokens } from './tokens';

/**
 * rem 단위 변환 유틸 함수
 * @param {string} value (ex: rem(16))
 * @param {string} baseValue
 * @returns {{value / baseValue}} (ex: 1rem)
 */
export const rem = (value: number | string, baseValue = 16): string => {
  return `${Number(value) / baseValue}rem`;
};

/**
 * FontStyle 변환 유틸 함수
 * put string in parameters
 * @param {string} font (ex: 'headingM')
 * @returns {string} fontStyle
 */
export const getFontStyle = (fontStyleAndVariant: string): FontTokens => {
  let fontStyles = fontStyleAndVariant;
  return tokens.fonts[fontStyles];
};
