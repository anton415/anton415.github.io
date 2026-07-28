/**
 * Formats a CV date string for display.
 * - 'present' → 'Present'
 * - '2019-12' → 'Dec 2019'
 * - '2023'    → '2023'
 */
export const formatMonthYear = (value: string): string => {
  if (value === 'present') {
    return 'Present';
  }

  const [year, month] = value.split('-');
  if (!month) {
    return year;
  }

  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
};
