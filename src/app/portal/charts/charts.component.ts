import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  public barchart: any;
  public linechart:any;
  public piechart:any;
  public dognutchart:any

  randomDataPoint()
  { return Math.round(Math.random()*100)};

  

  createChart(){
  
    this.barchart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

     
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
		datasets: [{
			label: 'Dataset 1',
			backgroundColor: "rgba(117,193,129,0.8)", 
			hoverBackgroundColor: "rgba(117,193,129,1)",
			
			
			data: [
				this.randomDataPoint(),
				this.randomDataPoint(),
				this.randomDataPoint(),
				this.randomDataPoint(),
				this.randomDataPoint(),
				this.randomDataPoint(),
				this.randomDataPoint()
			]
		}, 
		{
			label: 'Dataset 2',
			backgroundColor: "rgba(91,153,234,0.8)", 
			hoverBackgroundColor: "rgba(91,153,234,1)",
			
			
			data: [
				this.randomDataPoint(),
				this.randomDataPoint(),
				this.randomDataPoint(),
				this.randomDataPoint(),
				this.randomDataPoint(),
				this.randomDataPoint(),
				this.randomDataPoint()
			]
		}
		]
	},
      options: {
        aspectRatio:2.5
      }
      
    });

    this.linechart = new Chart("lineChart", {
      type: 'line', //this denotes tha type of chart

      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        
        datasets: [{
          label: 'Dataset',
          backgroundColor: "rgba(117,193,129,0.2)", 
          borderColor: "rgba(117,193,129, 0.8)", 
          data: [
            this.randomDataPoint(),
            this.randomDataPoint(),
            this.randomDataPoint(),
            this.randomDataPoint(),
            this.randomDataPoint(),
            this.randomDataPoint(),
            this.randomDataPoint()
          ],
        }]
      },
      options: {
        aspectRatio:2.5
      }
      
    });

    this.piechart = new Chart("pieChart", {
      type: 'pie', //this denotes tha type of chart

      data: {
        datasets: [{
          data: [
            this.randomDataPoint(),
            this.randomDataPoint(),
            this.randomDataPoint(),
          ],
          backgroundColor: [
            '#75c181',
            '#5b99ea',
            '#a9b5c9'
    
          ],
          label: 'Dataset 1'
        }],
        labels: [
          'Green',
          'Blue',
          'Gray',
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });

    this.dognutchart = new Chart("dognutChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        datasets: [{
          data: [
            this.randomDataPoint(),
            this.randomDataPoint(),
            this.randomDataPoint(),
          ],
          backgroundColor: [
            '#75c181',
            '#5b99ea',
            '#a9b5c9'
          ],
          label: 'Dataset 1'
        }],
        labels: [
          'Green',
          'Blue',
          'Gray',
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  constructor() { }

  ngOnInit(): void {
    this.createChart();

  }

}
