<template>
    <div class="flex items-center min-h-screen bg-gray-100 ">
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10 bg-white p-5  shadow-sm">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">CONTACT ME</h1>
                <p class="text-green-700 bg-green-300 p-2 border-1 border-green-700 animate-pulse" v-if="success"> Successfully sent !</p>
                <p class="text-gray-500 animate-bounce" v-else>Fill up the form below to send us a message.</p>

            </div>
            <div class="m-7">
                <form  method="POST" id="form">

                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                        <input type="text" v-model="fullname" name="name" id="name" placeholder="Budi Bermain Bola" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none focus:ring focus:ring-red-700 focus:border-black" />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" v-model="email" name="email" id="email" placeholder="budi@example.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none focus:ring focus:ring-red-700 focus:border-black" />
                    </div>
                    <div class="mb-6">

                        <label for="phone" class="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
                        <input type="tel" v-model="phone" name="phone" id="phone" placeholder="+1 (555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none focus:ring focus:ring-red-700 focus:border-black" />
                    </div>
                    <div class="mb-6">

                        <label for="telegram" class="text-sm text-gray-600 dark:text-gray-400">Telegram</label>
                        <input type="text" v-model="telegram" name="telegram" id="telegram" placeholder="t.me/xxxx" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none focus:ring focus:ring-red-700 focus:border-black" />
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                        <textarea rows="5" v-model="message" name="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none focus:ring focus:ring-red-700 focus:border-black" required></textarea>
                    </div>
                    <div class="mb-6">
                        <button type="button" @click="contactSubmit" class="w-full px-3 py-4 text-white bg-black hover:bg-red-700 focus:bg-red-500">Send Message</button>
                    </div>
                    <p class="text-base text-center text-gray-400" id="result">
                    </p>
                </form>
            </div>
        </div>
    </div>
</div>
</template>


<script>
export default{
    mounted()
    {
     this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
    },
    data()
    {
        return {
            success:false,
            fullname : '',
            email : '',
            phone : '',
            telegram : '',
            message : ''
        }
    },
    methods:{

        contactSubmit:function()
        {
            var userdata = "------ contact form justalinko.com ------ \n\n";
             userdata += "fullname :"+this.fullname + "\n"
             userdata += "email    :"+this.email + "\n"
             userdata += "phone    :"+this.phone + "\n"
             userdata += "telegram :"+this.telegram + "\n"
             userdata += "message  :"+this.message + "\n\n"
             userdata += "---------------------------------------------\n";
            fetch('https://api.telegram.org/'+ process.env.telegrambot_apikey +'/sendMessage?chat_id=1428033482&parse_mode=markdown&text=' + encodeURI(userdata) )
            .then(res => res.json())
            .then(data => {
                if(data.ok == true)
                {
                    this.fullname = ''
                    this.email = ''
                    this.phone = ''
                    this.telegram = ''
                    this.message = ''
                    this.success = true;
                }else{
                    this.success = false;
                }
            })
        }
    }
}
</script>
