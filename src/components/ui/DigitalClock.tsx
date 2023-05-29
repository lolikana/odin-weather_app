import { useEffect, useState } from 'react';

import GeneralText from './GeneralText';

const DigitalClock = (props: { timezone: string }) => {
  const { timezone } = props;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateClock = () => {
      const currentTime = new Date();
      const nextMinute = new Date(currentTime);
      nextMinute.setSeconds(0, 0);

      setTime(nextMinute);

      const delay =
        60000 - currentTime.getSeconds() * 1000 - currentTime.getMilliseconds();
      setTimeout(updateClock, delay);
    };

    updateClock();
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    minute: 'numeric'
  });

  return <GeneralText>{formattedTime}</GeneralText>;
};

export default DigitalClock;
