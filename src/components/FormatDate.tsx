import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

type Props = {
  dateString: string;
};

const FormatDate = (props: Props) => {
  const { dateString } = props;
  return (
    <time className="text-sm text-neutral-400">
      {format(toZonedTime(new Date(dateString), 'Asia/Tokyo'), 'yyyy-MM-dd')}
    </time>
  );
};

export default FormatDate;
