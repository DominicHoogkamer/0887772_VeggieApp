<template>
    <div>
        <h1>Dailey Progress</h1>
        <p>Date</p>
        <p>Protein this day</p>
        <h2>9</h2>
        <h4>Yesterday: 200</h4>
        <CommitChart></CommitChart>
        
        <p>Meal Plan</p>
        <h4>39.7%</h4>

        <p>Recommend Recipes</p> 
    </div>
</template>

<script>
import CommitChart from '@/components/ActivityGraph/CommitChart'

    export default {
        data () {
            return {
                foodItems: [],
                totalIron: '',
                totalProtein: ''
            }
        },
        components: {
            CommitChart
        },
        created () {
            this.fillArray();
        },
        methods: {
            fillArray () {
                let dataObj = JSON.parse(localStorage.getItem('itemsArray')),
                products = '',
                productId = '',
                dayPart = '',
                length = dataObj.length;

                for(let i = 0; i < dataObj.length; i++) {
                    products = dataObj[i].products[0];
                    dayPart = products.daypart;
                    productId = products.id;

                    this.$http.get(`https://api.nutritionix.com/v1/item/${productId}?appId=66d550ab&appKey=8f367946eb8f7f451a2b4e52df031158`)
                    .then(response => {                        
                        let productObject = {
                            iron: response.body.nf_iron_dv,
                            protein: response.body.nf_protein,
                        }
                        this.foodItems.push(productObject)
                    }, error => {
                    console.log(error);
                    }); 
                }
            },
        }
    }

</script>


<style scoped>
body{
    background: #FAFAFA
}
</style>