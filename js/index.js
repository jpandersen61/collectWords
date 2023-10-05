Vue.createApp({
    data() {

        return {
            counter: 0,
            words: ["Banana", "Orange", "Apple", "Mango"],
        }
    },

    computed: {
        result() {
            this.counter = this.counter + 1;
            if (this.words.length == 0)
            {
                return "Empty";
            } 
            return this.words.toString();
            
        }
    },

    methods: {

        clearList() {
            this.words.splice(0);
       },
        
        addWord(newWord) {
           this.words.push(newWord);   
        }
    }


}).mount("#app")