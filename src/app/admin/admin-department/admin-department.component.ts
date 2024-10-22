import { Component } from '@angular/core';
import { DepartmentDetail } from '../../model/department.model';
import { DepartmentService } from '../../service/department.service';
import { ActivatedRoute } from '@angular/router';
import { BarCharOptions, PieChartOptions } from '../../model/model';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-admin-department',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './admin-department.component.html',
  styleUrl: './admin-department.component.scss'
})
export class AdminDepartmentComponent {

  department!: DepartmentDetail;
  employeesChartOptions!: PieChartOptions;
  doctorsChartOptions!: BarCharOptions;
  nursesChartOptions!: BarCharOptions;

  constructor(private departmentService: DepartmentService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getDepartment();
  }

  getDepartment() {
    this.departmentService.getDepartmentDetail(this.getId())
      .subscribe({
        next: res => {
          this.department = res;
          this.initializeChart();
        }
      })
  }

  getId() {
    return this.route.snapshot.paramMap.get("id");
  }

  initializeChart() {
    this.employeesChartOptions = {
      series: [this.department.doctors, this.department.nurses],
      chart: {
        width: 400,
        type: "pie"
      },
      labels: ["Doctors", "Nurses"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
              height: 300
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.nursesChartOptions = {
      series: [
        {
          name: "Nurses in " + this.department.name + " department",
          data: [this.department.nursesByRank.SUV, this.department.nursesByRank.ASS, this.department.nursesByRank.INT]
        }
      ],
      chart: {
        height: 300,
        width: 580,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: "20px",
          colors: ["#FFFFFF"]
        }
      },

      xaxis: {
        categories: [
          "SUV",
          "ASS",
          "INT"
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 50],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "solid",
        colors: ["#0003FF"]
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      },
      title: {
        text: "Currently employed nurses",
        floating: false,
        offsetY: 350,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
    this.doctorsChartOptions = {
      series: [
        {
          name: "Doctors in " + this.department.name + " department",
          data: [this.department.doctorsByRank.ATP, this.department.doctorsByRank.FEL,
             this.department.doctorsByRank.CFR, this.department.doctorsByRank.SRR, 
             this.department.doctorsByRank.JRR, this.department.doctorsByRank.INT]
        }
      ],
      chart: {
        height: 300,
        width: 800,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: "20px",
          colors: ["#FFFFFF"]
        }
      },

      xaxis: {
        categories: [
          "ATP",
          "FEL",
          "CFR",
          "SRR",
          "JRR",
          "INT"
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 50],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "solid",
        colors: ["#0003FF"]
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      },
      title: {
        text: "Currently employed doctors",
        floating: false,
        offsetY: 350,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };

  }

}
