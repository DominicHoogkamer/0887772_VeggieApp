<template>
    <div id="app">
        <h1>Please fill in what you have eaten</h1>
        <p>So we can help you with your progress!</p>
        <input type="text" v-model="searchString" placeholder="Search for food" @keyup="fillArray"> 
        <ProductList :products="products"  :search="searchString" :active="active"></ProductList>      
        <button class="end-button" >Add Food</button>
    </div>
</template>

<script>
import ProductList from '@/components/home/ProductList'


export default {
    data () {
        return {
            active: false,
            searchString: '',
            products: [{

            }]
        }
    },
    components: {
        ProductList
    },
    methods: {
      fillArray () {
        this.addInput();
        this.$http.get(`https://api.nutritionix.com/v1_1/search/${this.searchString}?results=0%3A5&?fields=item_name%2Citem_id%2Cbrand_name&appId=e04cdea6&appKey=a9e5f13309aa5afb4086ab88774eab9f`)
        .then(response => {
          this.products = response.body.hits
          console.log(response.body.hits)
        }, error => {
          console.log(error);
        });       
      },
      addInput () {
        if(this.searchString !== '') {
          this.active = true
        } else {
          this.active = false
        }
      }
    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5B5B5D;
  margin-top: 60px;
  padding: 0 15px 0 15px;
}
h1 {
  font-weight: bold;
  font-size: 25px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
      width: 100%;
    text-align: left;
    font-size: 14px;
    border-bottom: 1px solid #E2E2E2;
    padding-bottom: 16px;
    font-weight: bold;
}
a {
  color: #42b983;
}
.add-button {
  padding: 5px 30px 5px 30px;
    border: none;
    color: #FFF;
    background-color: #e2e2e2;
}
.end-button {
  position : absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  border: none;
  background-color: #00b52a;
  color: #FFF;
}
input {
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 8px;
  font-weight: bold;
  font-size: 20px;
  color: #e2e2e2;
  
}
::-webkit-input-placeholder {
    color:    #e2e2e2;
}
input:focus{
  outline: none;
}
</style>