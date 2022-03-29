<template>
  <!-- Basic Information -->
  <section>
    <!-- Using base-card style -->
    <base-card>
      <h2> {{ fullName }}</h2>
      <h3> € {{selectedCoach.hourlyRate }}/hour</h3>
    </base-card>
  </section>
  <!-- End Basic Information -->
  <!-- Contact -->
  <section>
    <!-- Using base-card style -->
    <base-card>
      <div>
        <h2>Interested? Reach out now!</h2>
        <!-- Using base-button style -->
        <base-button link :to="contactLink">Contact</base-button>
      </div>
      <!-- contact view -->
      <router-view></router-view>
    </base-card>
  </section>
  <!-- End Contact -->

  <section>
    <!-- Using base-card style -->
    <base-card>
      <!-- Using base-badge style -->
      <base-badge v-for="area in selectedCoach.areas" :key="area" :type="area" :title="area"></base-badge>
      <p>{{ selectedCoach.description }}</p>
    </base-card>
  </section>

</template>


<script>
export default {
  props: ['id'],
  data() {
    return{
      selectedCoach: null
    }
  },
  computed:{
    fullName() {
      return this.selectedCoach.firstName + '' + this.selectedCoach.lastName;
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id)
  }
}
</script>