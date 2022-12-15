// --
// Template
<template>
    <form
        @submit.prevent
        id="generate-form" 
        class="mt-4"
    >
      <input 
        id="URLInput"
        class="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5" 
        placeholder="Enter a valid URL"
        v-model="url" 
        @keyup="checkUrlLength" 
        required
      />

      <select 
        id="SizeSelect"  
        class="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5" 
        v-model="this.selectedSize"
      >
        <option
          v-for="( size, $sizeIndex ) of this.sizeOptions" 
          :key="$sizeIndex" 
          :value="size" 
        >
          {{ `${ size }x${ size }` }}
        </option>

      </select>

      <button 
        id="GenerateButton"
        type="button" 
        class="bg-gray-600 rounded w-full text-white py-3 px-4 mt-5 hover:bg-black hover:disabled:bg-grey-600" 
        @click="generateCode" 
        disabled
      >
        Generate My QR Code
      </button>

      <div 
        id="ErrorMessage" 
        class="w-full p-3"
      >
        <p class="text-red-400 bg-red-50 py-2 px-4 mb-5">
          You must provide a valid URL. Ensure you have included www., the domain name, the Top Level Domain/TLD (.com, .net, etc.), the path if necessary (anything after the TLD), and that you have the correct protocol (http/https).
        </p>

        <a 
          href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL" 
          class="bg-blue-500 rounded py-2 px-4 m-auto mt-5 w-full text-white"
          target="_blank"
        >
          You can learn more about URLs here.
        </a>
      </div>
    </form>
</template>


// --
// Script and Setup
<script>
  import QRCode from '../qrcodejs/qrcode';

  export default {
    name: 'QRForm',
    components: {},
    mounted: () => {
      
    },
    data () {
      return {
        url: '',
        sizeOptions: [ "100", "200", "300", "400", "500", "600", "700" ], 
        selectedSize: "300",
      }
    },
    computed: {},
    methods: {
      generateCode() {
        const validURL = new RegExp( /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/ );

        const ErrorMessage = document.querySelector( '#ErrorMessage' );
        const SaveImageLink = document.querySelector( '#SaveImageLink' );

        // Reset atttributes each time generateCode is called
        SaveImageLink.href = saveImageURL;
        SaveImageLink.download = 'GeneratedQRCode';
        SaveImageLink.style.display = 'inline-block';

        // Check if valid url
        if ( validURL.test( this.url )) {
          const Spinner = document.querySelector( '#Spinner' );
          Spinner.style.display = "inline-block";

          setTimeout(() => {
            const GeneratedQRCode = document.querySelector( '#GeneratedQRCode' );
            ErrorMessage.style.display = "none";
            
            // Generate QR Code
            new QRCode( 'GeneratedQRCode' , {
              text: this.url,
              width: this.size,
              height: this.size
            }); 

            Spinner.style.display = "none";

            setTimeout(() => {
              const saveImageURL = GeneratedQRCode.querySelector( 'img' ).src;

              // Show Save Image Button/Link
              SaveImageLink.href = saveImageURL;
              SaveImageLink.download = 'GeneratedQRCode';
              SaveImageLink.style.display = 'inline-block';
            }, 100 );
          }, 1500 );


          
        } else {
          ErrorMessage.style.display = "block";
        }
      },
      checkUrlLength( event ) {
        const GenerateButton = document.querySelector( '#GenerateButton' );
        if ( event.target.value.length > 3 ) {
          GenerateButton.removeAttribute( 'disabled' )
        } else {
          GenerateButton.setAttribute( 'disabled', '' );
        }
      }
    }
  }
</script>


// --
// Style
<style scoped>
  #ErrorMessage {
    display: none;
    transition: 0.3s;
  }
</style>