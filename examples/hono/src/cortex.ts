import {Cortex} from '../../../build/index.js';

const BASE_URL = 'http://localhost';
const API_KEY =
  'aee0488118a311ba94683dec080e33efae6abe186563184339cd46d5d96822a0';

export const testExample = async () => {
  try {
    const cortex = new Cortex({
      baseUrl: BASE_URL,
      apiKey: API_KEY,
    });

    const items = await cortex.apps.workflows.list();

    console.log('items', items);
  } catch (error) {
    console.log(error?.toString());
  }
};
