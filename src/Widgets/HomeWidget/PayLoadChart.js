import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { spendNLoadData } from '../../Redux/Spend&Load'

const PayLoadChart = () => {
    const options = {
        chart: {
            backgroundColor: "#F1F1F1",
            height:300
        },
        xAxis: {
            categories: spendNLoadData.Response.SpendsAndLoads.map(item => `${item.Month.slice(0, 3).toUpperCase()} <br/> ${item.Year}`),
            labels: {
                style: {
                    color: "#7D686F",
                    fontWeight: 500

                },
                rotation: 0,
            },
            lineColor:"#DEE3ED"
        },
        legend: {
            enabled: false
        },

        title: {
            text: null
        },

        // subtitle: {
        //     text: '<button class="custom-button-green">LOAD</button><button class="custom-button-blue">SPEND</button>',
        //     useHTML: true,
        //     style: {
        //         color: '#ff0000', // Set the color as desired
        //         display: 'flex',
                
        //         justifyContent: 'flex-end',
        //         flexDirection:"row",
        //         width:"100%"
        //       }
           
        // },


        yAxis: {
            title: {
                text: null
            },
            gridLineWidth: 0,
            labels: {
                enabled: false
            }
        },

        tooltip: {
            useHTML: true,
            formatter() {
                return (`<div style="padding:7px 0">${this.series.name}: $${this.y}</div>`)
            },
            backgroundColor: "#222323",
            style: {
                color: "#fff",
                cursor: "pointer",
                padding: "10px"
            }
        },

        plotOptions: {
            series: {
                cursor: 'pointer',
                lineWidth: 2

            }
        },
        credits: {
            enabled: false
        },

        series: [{
            name: "LOAD",
            data: spendNLoadData.Response.SpendsAndLoads.map(item => item.SpendAmount),
            color: "#04C592",


        }, {
            name: "SPEND",
            data: spendNLoadData.Response.SpendsAndLoads.map(item => item.LoadAmount),
            color: "#3573FF"
        }]
    }

    const customButtonStyle = `
    .subtitle {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        width:100%;
        background-color:red
        

    }

    .text {
        color: #666666;
        font-weight: 500
    }

    .custom-button-green {
      background-color: #04C592;
      border-radius: 15px;
      color: #ffffff;
      padding: 5px 10px;
      border: none;
      margin: 0 10px
    }

    .custom-button-blue {
        background-color: #3573FF;
        border-radius: 15px;
        color: #ffffff;
        padding: 5px 10px;
        border: none;
        margin: 0 10px
      }
  `;

    return (
        <div>
            <style>{customButtonStyle}</style>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default PayLoadChart
