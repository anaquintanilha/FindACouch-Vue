export default{
  //return all coaches
  coaches(state) {
    return state.coaches;
  },
  //verify if has coaches
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  //user is a coach
  isCoach(_, getters, _2, rootGetters){   // OR isCoach(state, getters, rootState, rootGetters){
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some( coach => coach.id === userId);
  }
};