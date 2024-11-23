import {Cortex} from '../../../build/index.js';

const BASE_URL = 'http://localhost';
const APP_ID = 'app_093suv7KbkWqjujqDBb5y7';
const API_KEY =
  '8bf9923b0ebc5974ea3f3dff301dbde62829c451f53b8f031f7f7216774f4d76';

export const testExample = async () => {
  try {
    const cortex = new Cortex({
      baseUrl: BASE_URL,
      appId: APP_ID,
      apiKey: API_KEY,
    });

    const result = await cortex.get('/apps/{app_id}/workflows', {
      params: {
        path: {
          app_id: APP_ID,
        },
      },
    });

    console.log('result', result);
  } catch (error) {
    console.log(error?.toString());
  }
};
