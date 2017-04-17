<template>
<div>
    <h1>Food</h1>
    <ul>
        <li v-for="foodItem in foodItems">
            <p>{{ foodItem.name }}</p>
            <router-link to="/products/product/513fceb675b8dbbc21001eaf">Link</router-link>
        </li>
    </ul>
</div>
</template>


<script>
    export default {
        data () {
            return {
                dataDB: [
                    {id: '513fceb675b8dbbc21001eaf'}
                ],
                foodItems: []
            }
        },
        created () {
            this.fillArray();
        },
        methods: {
            fillArray () {
                for (let i = 0; i < this.dataDB.length; i++) {
                    this.$http.get("https://api.nutritionix.com/v1/item/"+this.dataDB[i].id+"?appId=a47256fa&appKey=ad60d4a30bd7aac0ff4b0a32f349c93a")
                    .then(response => {
                        let productObject = {
                            name: response.body.item_name,
                            description: response.body.item_description,
                            iron: response.body.nf_iron_dv,
                        }
                        this.foodItems.push(productObject)
                    }, error => {
                    console.log(error);
                    }); 
                }      
            }
        }
    }
</script>