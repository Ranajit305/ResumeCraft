export function formatDateRange(date) {
  return new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month: "long",
    year: "numeric"
  })
}
