import { wxRequest } from '@/utils/wxRequest';

const api = 'https://sujiefs.com';

const getAdList = (params) => wxRequest(params, api + '/api/adverts/list');

const getDiscoverList = (params) => wxRequest(params, api + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

const getHomeDiscoverList = (params) => wxRequest(params, api + '/api/mall/discoverList');
export default { getAdList, getDiscoverList, getHomeDiscoverList };
