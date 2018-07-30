import jsCookie from 'js-cookie';

import { AB_TESTING_COOKIE_NAME } from '../constants';

export default jsCookie.get(AB_TESTING_COOKIE_NAME);
