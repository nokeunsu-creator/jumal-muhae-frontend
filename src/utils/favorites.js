const KEY = 'jumal-muhae-favorites'

export function getFavorites() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]') }
  catch { return [] }
}

export function isFavorite(id) {
  return getFavorites().includes(Number(id) || id)
}

export function toggleFavorite(id) {
  const numericId = Number(id) || id
  const list = getFavorites()
  const next = list.includes(numericId)
    ? list.filter(x => x !== numericId)
    : [...list, numericId]
  localStorage.setItem(KEY, JSON.stringify(next))
  return next
}
