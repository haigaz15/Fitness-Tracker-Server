import log from 'pino';
import dayjs from 'dayjs';
const logger = log({
   base: {
      pid: false,
   },
   timestamp: () => `,"time":"${dayjs().format()}"`,
   transport: {
      target: 'pino-pretty', // Pretty-print logs
      options: {
         colorize: true, // Enables colors in the output
         translateTime: true, // Shows human-readable timestamps
         ignore: 'pid,hostname', // Omits certain fields like `pid` and `hostname`
      },
   },
});

export default logger;
