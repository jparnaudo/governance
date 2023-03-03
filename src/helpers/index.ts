import logger from 'decentraland-gatsby/dist/entities/Development/logger'

export function inBackground(fun: () => Promise<any>) {
  Promise.resolve()
    .then(fun)
    .then((result) => logger.log('Completed background task', { result: JSON.stringify(result) }))
    .catch((err) => logger.error('Error running background task', formatError(err)))
}

export function formatError(err: Error) {
  const errorObj = {
    ...err,
    message: err.message,
    stack: err.stack,
  }

  return process.env.NODE_ENV !== 'production' ? err : errorObj
}

export const getFormattedPercentage = (value: number, total: number, decimals = 2): string => {
  const formattedNumber = value > 0 && total > 0 ? ((value * 100) / total).toFixed(decimals) : 0
  return `${formattedNumber}%`
}

export const getRoundedPercentage = (value: number, total: number) => Math.min(Math.round((value * 100) / total), 100)

export function getUncappedRoundedPercentage(value: number, total: number): number {
  return Math.round((value * 100) / total)
}

export function getUrlFilters<T>(filterKey: string, params: URLSearchParams, value?: T) {
  const newParams = new URLSearchParams(params)
  value ? newParams.set(filterKey, String(value)) : newParams.delete(filterKey)
  newParams.delete('page')
  const stringParams = newParams.toString()
  return `${location.pathname}${stringParams === '' ? '' : '?' + stringParams}`
}
