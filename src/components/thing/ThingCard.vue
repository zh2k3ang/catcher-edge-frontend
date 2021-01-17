<template>
  <div class="thingCard">
    <h6>{{name}}</h6>
    <h6>{{id}}</h6>
    <h6>{{state}}</h6>
    <div class="thingProperties">
      <ul>
        <li v-for="prop in properties" :key="prop.name">
          {{prop.name}}
        </li>
      </ul>
    </div>
    <div class="thingServices">
      <ul>
        <li v-for="service in services" :key="service.name">
          {{service.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "ThingCard",
    data: {
      name: String,
      id: String,
      type: String,
      properties: {},
      services: {},
    }
}
</script>

<style scoped>

</style>