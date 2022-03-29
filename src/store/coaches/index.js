import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  //getters, actions and mutations will be automatically namespaced based on the path the module is registered
  namespaced: true,
  state() {
    return {
      coaches: [
        /*{
          id: 'c1',
          firstName: 'Joana',
          lastName: 'Carvalho',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Joana and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Paulo',
          lastName: 'Pinho',
          areas: ['frontend', 'career'],
          description:
            'I am Paulo and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }*/
      ]
    };
  },
  //same as -> mutations: mutations
  mutations,
  actions,
  getters
}