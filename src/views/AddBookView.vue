<template>
    <div>
      <h1>Add Book</h1>
      <form @submit.prevent="addBook">
        <div>
          <label for="isbn">ISBN:</label>
          <input type="text" v-model="isbn" id="isbn" required />
        </div>
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  </template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isbn = ref('');
    const name = ref('');

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }
        const response = await fetch('https://addbooks-rs3eb7q73a-uc.a.run.app', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            isbn: isbnNumber,
            name: name.value,
          }),
        });

        if (response.ok) {
          isbn.value = '';
          name.value = '';
          alert('Book added successfully!');
        } else {
          alert('Error adding book');
        }
      } catch (error) {
        console.error('Error adding book: ', error);
        alert('Error adding book');
      }
    };

    return {
      isbn,
      name,
      addBook,
    };
  },
};
</script>
