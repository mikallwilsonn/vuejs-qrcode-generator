// --
// Template
<template>
  <Header />

  <main>
    <div class="flex flex-col-reverse align-center justify-center p-10 m-auto md:max-w-4xl md:flex-row">
      <div class="w-full md:w-2/3 mr-24">
        <h1 class="text-3xl font-bold mb-5 md:text-4xl">
          QRCode Generator
        </h1>

        <p class="mb-4">
          QR Codes allow smartphone users to access your website simply and quickly.
        </p>

        <p>
          Enter your desired URL below to generate a QR Code and download the image.
        </p>

        <QRForm />
      </div>

      <div class="w-full md:w-1/3 self-center">
        <img 
          class="w-3/4 m-auto mb-10 md:w-full"
          :src="image"
          alt="Image by pch.vector on Freepik - https://www.freepik.com/free-vector/tiny-people-using-qr-code-online-payment-isolated-flat-illustration_11235952.htm#query=phone%20qr%20code&position=3&from_view=search&track=sph"
        />
      </div>
    </div>
  </main>

  <GeneratedCode />
</template>


// -- 
// Scripts 


<script>
  import Header from './components/Header.vue';
  import QRForm from './components/QRForm.vue';
  import GeneratedCode from './components/GeneratedCode.vue';

  import image from "./assets/img/img.jpg"

  export default {
    name: 'App',
    components: { Header, QRForm, GeneratedCode },
    data () {
      return {
        image
      }
    },
    computed: {},
    methods: {}
  }
</script>


// --
// Style
<style scoped></style>
