import { formatDistanceToNow, format } from 'date-fns';

const formatDataTime = dataTime =>
  formatDistanceToNow(new Date(dataTime), { addSuffix: true });

export default formatDataTime;

export function formatDate(newDate) {
  return format(new Date(newDate), 'Pp');
}
