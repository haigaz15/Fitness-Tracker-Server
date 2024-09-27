import log from 'pino';
import dayjs from 'dayjs';
const logger = log({
   base: {
      pid: false,
   },
   timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default logger;
