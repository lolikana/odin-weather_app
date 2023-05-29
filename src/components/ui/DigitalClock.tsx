import { useEffect, useState } from 'react';

import GeneralText from './GeneralText';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateClock = () => {
      setTime(new Date());

      const delay = 60000 - time.getSeconds() * 1000 - time.getMilliseconds();
      setTimeout(updateClock, delay);
    };

    updateClock();
  }, []);

  let hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, '0'); // Convert to string and pad with leading zeros if necessary
  const amPm = hours >= 12 ? 'PM' : 'AM';

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  return (
    <GeneralText>
      {hours}:{minutes} {amPm}
    </GeneralText>
  );
};

export default DigitalClock;
