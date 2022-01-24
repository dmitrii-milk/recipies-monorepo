import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const config = {
  app: {
    port: process.env.PORT || 3000,
  },
};

export default config;
