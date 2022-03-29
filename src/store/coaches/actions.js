export default{
  //create a new coache
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    //POST a new entry would be added all the time
    //PUT if it existed is overwriten or created if didn't exist yet
    //in this case we what a PUT just for development
    const response = await fetch(`https://vue-findacoach-8e01c-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData)
    });

    //  const responseData = await response.json();

    if(!response.ok) {
      // error ....
    }


    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },

  //load all coaches
  async loadCoaches(context) {
    const response = await fetch(
      `https://vue-findacoach-8e01c-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
  }
};