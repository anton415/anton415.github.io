/**
 * Formats a CV date string for display.
 * - 'present' → 'н.в.'
 * - '2019-12' → 'дек. 2019 г.'
 * - '2023'    → '2023'
 */
export const formatMonthYear = (value: string): string => {
  if (value === 'present') {
    return 'н.в.';
  }

  const [year, month] = value.split('-');
  if (!month) {
    return year;
  }

  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleString('ru-RU', { month: 'short', year: 'numeric' });
};
