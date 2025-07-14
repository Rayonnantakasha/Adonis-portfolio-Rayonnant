import env from '#start/env';
import { defineConfig, transports } from '@adonisjs/mail';
const mailConfig = defineConfig({
    default: 'smtp',
    mailers: {
        smtp: transports.smtp({
            host: env.get('SMTP_HOST'),
            port: env.get('SMTP_PORT'),
        }),
    },
});
export default mailConfig;
//# sourceMappingURL=mail.js.map