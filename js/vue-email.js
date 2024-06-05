const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: []
        }
    },
    methods: {
        getData() {
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((email) => {
                        console.log(email.data.response);
                        this.emails.push(email.data.response);
                    })
            }

        },

    },
    created() {
        this.getData();
    }
}).mount('#app');