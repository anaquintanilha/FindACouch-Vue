<template>
  <!--using teleporting in base-dialog -->
  <base-dialog title="An error occurred" @close="handleError" :show="!!error" > <!-- using !!error to pass as a bolean not a string-->
    <p> {{ error }}</p>
  </base-dialog>
  <section>
   <coach-filter @change-filter="setFilters"></coach-filter> 
  </section>
  <section>
    <!-- Using base-card style -->
    <base-card>
      <!-- Buttons-->
      <div class="controls">
        <!-- Using base-button style -->
        <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
        <base-button link to="/register" v-if="!isCoach && !isLoading">Register as Coach</base-button>
      </div>
      <!-- End Buttons -->
      <!-- Loading when getting coaches -->
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <!-- End Loading -->
      <!-- List of coaches-->
      <ul v-else-if="hasCoaches">
        <coach-item v-for="coach in filteredCoaches" 
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
      <!-- End List of coaches -->
    </base-card>
   </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components:{
    CoachItem,
    CoachFilter
  },
  data(){
    return {
      isLoading: true,
      error: null,
      activeFilters:{
        frontend: true,
        backend:true,
        career: true
      }
    }
  },
  computed: {
    isCoach(){
      return this.$store.getters['coaches/isCoach'];
    },
    filteredCoaches(){
      const coaches= this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
        if(this.activeFilters.frontend && coach.areas.includes('frontend')){
          return true;
        }
        else if(this.activeFilters.backend && coach.areas.includes('backend')){
          return true;
        }
        else if(this.activeFilters.career && coach.areas.includes('career')){
          return true;
        }
      });
    },
    hasCoaches(){
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
      //this.$store.getters.coaches not used because of namespaced
    }
  },
  created(){
    this.loadCoaches();
  },
  methods:{
    setFilters(updateFilters){
      this.activeFilters=updateFilters;
    },
    //using async beacuse of the loader
    async loadCoaches(){
      this.isLoading = true;
      try{
        this.$store.dispatch('coaches/loadCoaches');
      } catch(error){
        this.error = error.message || 'Something went wrong!'
      }
      this.isLoading = false;
    },
    handleError(){
      this.error = null;
    }
  }

}
</script>



<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>