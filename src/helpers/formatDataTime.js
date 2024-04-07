import { formatDistanceToNow } from 'date-fns'

const formatDataTime = (dataTime) => formatDistanceToNow(new Date(dataTime), { addSuffix: true })

export default formatDataTime;