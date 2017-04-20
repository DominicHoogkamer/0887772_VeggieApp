import { Doughnut } from 'vue-chartjs'

export default Doughnut.extend({
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Water Bespaard * 100 = Liter','Koeien bespaard'],
      datasets: [
        {
            backgroundColor: [
                "#36A2EB",
                "#FF6384"
                
            ],
            data: [15, 2]
        }
      ],
       options: {
        animation:{
            animateScale:true
        }
    }
    }, {responsive: false, maintainAspectRatio: false, legend: false})
  }
});