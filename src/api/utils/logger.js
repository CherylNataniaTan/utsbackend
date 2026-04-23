const pino = require("pino");

const transport = pino.transport({
  target: "pino-pretty",
  options: {
    colorize: true,
    translateTime: "HH:MM:ss",
    ignore: "pid,hostname",
  },
});

const logger = pino(
  {
    level: "info",
    formatters: {
      level(label) {
        return { level: label.toUpperCase() };
      },
    },
    timestamp: () => `,"time":"${new Date().toLocaleTimeString()}"`,
  },
  transport
);

module.exports = logger;