export const getPosition = (salesBalance) => {
  if (salesBalance < 5000) {
    return 'Aversis Starting'
  } else if (salesBalance < 20000) {
    return 'Aversis Agent'
  } else if (salesBalance < 60000) {
    return 'Aversis Seller'
  } else if (salesBalance < 120000) {
    return 'Aversis Manager'
  } else if (salesBalance < 250000) {
    return 'Aversis Gold'
  }

  return 'Aversis Platinum'
}

export const getStatus = (status) => {
  const statuses = {
    NOT_ACTIVATED: 'Не активированный',
    NEW: 'Новый',
    ACTIVE: 'Активный',
    INACTIVE: 'Не активный',
  }

  return statuses[status]
}
