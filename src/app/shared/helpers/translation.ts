export type ValueWithLabel = { value: string; labelTranslationKey: string };

/**
 * Transform enum to {ValueWithLabel[]} type
 *
 * @param enumDTO DTO from Backend
 * @param translationBase Translation base for i18n (e.g. 'COMMON.TYPE')
 * @returns {ValueWithLabel[]}
 */
export function getBackendEnumKeyValue(
  enumDTO: any,
  translationBase: string
): ValueWithLabel[] {
  return Object.keys(enumDTO).map((key) => {
    const value = enumDTO[key];
    return {
      value: value,
      labelTranslationKey: `${translationBase}.${value.toUpperCase()}`,
    };
  });
}
