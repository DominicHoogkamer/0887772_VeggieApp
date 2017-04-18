<template>
<div>
    <div class="container">
        <ul class="dailey-food-list">
            <li v-for="foodItem in foodItems">
                <h3> 1 {{ foodItem.name }}</h3>
                <p>{{ foodItem.iron }}</p>
                <!--<router-link to="/products/product/513fceb675b8dbbc21001eaf">Link</router-link>-->
            </li>
        </ul>

        <h3>Yesterday</h3>

        <ul class="dailey-food-list">
            <li v-for="staticData in staticDatas">
            <h3> 1 {{ staticData.name }}</h3>
            <p>{{ staticData.iron }}</p>
            </li>
        </ul>
    </div>

</div>
</template>


<script>
    export default {
        data () {
            return {
                staticDatas: [
                    {name: 'apple', iron: '4'},
                    {name: 'apple', iron: '4'},
                    {name: 'apple', iron: '4'},
                    {name: 'apple', iron: '4'},
                ],
                foodItems: [],
                count : ''
            }
        },
        created () {
            this.fillArray();
        },
        methods: {
            fillArray () {
                for (let i = 0; i < JSON.parse(localStorage.getItem('itemsArray')).length; i++) {
                    this.$http.get("https://api.nutritionix.com/v1/item/"+JSON.parse(localStorage.getItem('itemsArray'))[i].id+"?appId=a47256fa&appKey=ad60d4a30bd7aac0ff4b0a32f349c93a")
                    .then(response => {
                        let productObject = {
                            name: response.body.item_name,
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

<style>
body {
    background: #fff;
}

.container {

}

.dailey-food-list {
    padding: 10px;
    background: #FFF;
    box-shadow: -1px 3px 14px 1px rgba(141,191,224,0.2);
    color: #7D808B;
}

.dailey-food-list h3 {
    color: #4BB5FF;
}

</style>