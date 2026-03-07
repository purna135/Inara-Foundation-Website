export function formatDateRange(
  startDate?: string,
  endDate?: string,
  legacyDate?: string,
  monthFormat: 'short' | 'long' = 'short',
): string {
  if (!startDate) return legacyDate || '';
  const fmt = (d: string) =>
    new Date(d + 'T00:00:00').toLocaleDateString('en-US', {
      month: monthFormat,
      day: 'numeric',
      year: 'numeric',
    });
  if (!endDate) return fmt(startDate);
  const start = new Date(startDate + 'T00:00:00');
  const end = new Date(endDate + 'T00:00:00');
  if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth()) {
    return `${start.toLocaleDateString('en-US', { month: monthFormat, day: 'numeric' })} – ${end.getDate()}, ${end.getFullYear()}`;
  }
  return `${fmt(startDate)} – ${fmt(endDate)}`;
}
