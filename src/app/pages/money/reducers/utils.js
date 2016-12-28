export const getPackage = (type) => {
  const names = {
    basis: 'Базис',
    standart: 'Стандарт',
    premium: 'Премиум',
    business: 'Бизнес',
  }

  return names[type]
}
