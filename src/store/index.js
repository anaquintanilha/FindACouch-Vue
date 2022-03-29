import { createStore } from 'vuex';

import coachesModule from './coaches/index.js';
import requestsModule from './requests/index.js';


const store = createStore({
  modules:{
    coaches: coachesModule,
    requests: requestsModule
  },
  //dummy for now
  //register and logged in as c3 userId
  state(){
    return{
      userId: 'c3'
    };
  },
  getters:{
    userId(state) {
      return state.userId;
    }
  },
});

export default store;
