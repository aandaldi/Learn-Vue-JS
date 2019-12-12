<template>
  <div class="example">
    <v-card>
      <v-container>
        <v-row align="center">
          <v-col cols="5">
            <apexchart type="bar" height="250" :options="chartOptions" :series="series" />
          </v-col>
          <v-col cols="5">
            <apexchart type="bar" height="250" :options="chartOptions" :series="series" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <apexchart type="bar" height="250" :options="chartOptions1" :series="series" />
          </v-col>
          <v-col>
            <apexchart type="bar" height="250" :options="chartOptions1" :series="series" />
          </v-col>
          <v-col>
            <apexchart type="bar" height="250" :options="chartOptions1" :series="series" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <div>
      <button @click="updateChart">Update!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarExample",
  data: function() {
    return {
      series: [
        {
          name: "Movic",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "Sejalan",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "CariParkir",
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          name: "Seva",
          data: [21, 7, 25, 13, 22, 8]
        }
      ],
      chartOptions: {
        chart: {
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false
          }
        },

        xaxis: {
          type: "datetime",
          categories: [
            "01/01/2011 GMT",
            "01/02/2011 GMT",
            "01/03/2011 GMT",
            "01/04/2011 GMT",
            "01/05/2011 GMT",
            "01/06/2011 GMT"
          ]
        },
        legend: {
          position: "right",
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      },
      chartOptions1: {
        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        dataLabels: {
            enabled: false
          },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false
          }
        },

        xaxis: {
          type: "datetime",
          categories: [
            "01/01/2011 GMT",
            "01/02/2011 GMT",
            "01/03/2011 GMT",
            "01/04/2011 GMT",
            "01/05/2011 GMT",
            "01/06/2011 GMT"
          ]
        },
        legend: {
          position: "right",
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      }
    };
  },
  methods: {
    updateChart() {
      const max = 90;
      const min = 20;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
      this.chartOptions = {
        colors: [colors[Math.floor(Math.random() * colors.length)]]
      };
      // In the same way, update the series option
      this.series = [
        {
          data: newData
        }
      ];
    }
  }
};
</script>