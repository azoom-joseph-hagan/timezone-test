<template>
  <div>
      <Calendar v-model="date" showTime hourFormat="24" />
      <Button label="submit" @click="addEvent" /> 
      <div>
        <Calendar v-model="time1" showTime hourFormat="24" />
        <Calendar v-model="time2" showTime hourFormat="24" />
        <Button label="Search Dates" @click="searchEvents" /> 
      </div>
      <div v-for="event in events">
      <p>Id: {{ event.id }}</p>
      <p>Booking date: {{ event.bookedOn }}</p>
      <p>Booking Datetime: {{ event.bookedAt }}</p>
      <p>Booking Datetime (local): {{ new Date(event.bookedAt).toLocaleString() }}</p>
      <p>Created at: {{ event.createdAt }}</p>
      <p>Created at (local): {{ new Date(event.createdAt).toLocaleString() }}</p>
      <p>Updated at: {{ event.updatedAt }}</p>
      </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import moment from "moment";


const addEvent = async () => {
  console.log(date.value);
  await $fetch("/api/test-post", {
    method: "POST",
    body: {
      bookingDate: moment(new Date(date.value)).format('YYYY-MM-DD'),
      bookingDatetime: date.value
    }
  })
  await fetchEvents()
} 

const fetchEvents = async () => {
  const fetchedEvents = await $fetch("/api/test-post")
  console.log(fetchedEvents);

  if (fetchedEvents) events.value = fetchedEvents

}

const searchEvents = async () => {
  const fetchedEvents = await $fetch(`/api/range`, {
    method: "POST",
    body: {
      from: time1.value,
      to: time2.value
    }
  })

  if (fetchedEvents) events.value = fetchedEvents
}

const date = ref();
const time1 = ref();
const time2 = ref();
const events = ref([])
</script>