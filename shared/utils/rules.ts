export const requiredField = (value: any) => {
  return (
    (value && value.length >= 1) ||
    (value !== undefined && value !== null && value !== '') ||
    Number(value) ||
    'Обязательное поле'
  )
}
