import { Versioning } from '../app/interfaces/versioning.interface';

export const environment = {
  production: true
};

export const DEPLOYMENT_VERSION: Versioning = {
  development: '0.0.1',
  preproduction: '1.0.0',
  production: '1.0.0'
};
