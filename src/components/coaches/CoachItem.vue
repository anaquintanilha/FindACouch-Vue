<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>€{{rate}}/hour</h4>
    <div>
      <!-- Using base-badge style -->
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    </div>
    <div class="actions">
      <!-- Using base-button style -->
      <base-button class="outline" link :to="coachContactLink">Contact</base-button>
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
import BaseBadge from '../base/BaseBadge.vue';
export default{
  components: { BaseBadge },
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed:{
    fullName(){
      return this.firstName + ' ' + this.lastName; 
    },
    coachContactLink(){
      //example /coaches/c1/contact
      return this.$route.path  + '/' + this.id + '/contact';
    },
    coachDetailsLink(){
      //example /coaches/c1
      return this.$route.path + '/' + this.id;
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}


</style>