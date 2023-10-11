import { Component } from '@angular/core';

@Component({
  selector: 'app-minimum-operations-to-make-array-continious',
  templateUrl: './minimum-operations-to-make-array-continious.component.html',
  styleUrls: ['./minimum-operations-to-make-array-continious.component.scss']
})
export class MinimumOperationsToMakeArrayContiniousComponent {
  constructor() {
    this.minOperations([3392,8634,7525,4606,3885,5306,9932,8042,6797,4381,4473,7423,5229,1377,1373,358,1648,4072,895,8689,8522,360,6582,1324,1511,147,6436,1237,8160,5335,9044,9753,9618,5901,460,4100,7514,5081,8677,6568,524,4968,4339,5985,6996,3448,8681,913,5710,3305,1007,6388,6899,7419,4417,5076,3797,7098,5722,6432,4500,5257,3523,6883,9057,2097,9495,324,7254,2805,5115,7915,2827,8654,2621,9651,8450,6530,8967,1178,3917,6984,1616,9276,4907,6654,2998,7404,5922,8581,3015,8796,6074,2350,8499,6846,5607,3420,1684,4434,7565,6171,7447,3538,2038,4572,9020,4130,9456,220,9634,4713,5342,3206,5574,3589,806,2960,5558,3262,4888,4365,3683,5165,4783,2229,4031,1311,1951,719,1677,4818,6688,4825,518,7429,3260,979,7522,8179,4943,9600,9217,545,8037,22,1718,3985,4537,7961,7278,3418,4200,5562,6840,9102,6501,285,4169,1119,8396,8823,1685,6526,8125,8599,2267,2454,3131,2658,468,4165,2397,632,7038,8775,6450,6373,5625,687,7293,8642,5517,3709,1940,4519,5414,8461,8935,1383,1940,8398,7557,3689,6506,1103,6825,2453,3237,4612,9765,4400,4698,6474,6897,9540,4290,1364,6867,2071,9911,6343,6678,802,5800,452,3062,8295,8154,2124,2686,5554,4903,9018,3098,4543,2573,7626,8205,8722,9978,9507,7903,2846,6686,4307,2989,3924,9613,9924,7625,4475,9026,2305,9327,9756,1851,7967,9340,6840,113,2797,7060,8673,4716,2455,3680,8032,8558,67,7089,4167,1941,3555,6948,4549,8728,3938,8567,460,4299,3034,1745,6901,5307,524,5270,84,4016,1154,6220,2398,2701,9559,5274,3122,1361,7477,8685,1820,6153,812,9967,9396,2374,4722,7849,9991,6606,7083,9,891,7549,6771,9137,8295,9775,474,5608,8151,788,4530,982,60,7385,9822,6913,5477,430,615,3479,6955,7402,4325,1914,4060,7967,6747,2754,5532,4341,951,9232,7925,3471,3565,823,3549,7083,266,3542,7859,8719,9066,3178,2377,5582,1903,2984,3294,4661,6924,4404,7774,3757,4093,1540,6171,9850,2179,2680,5270,9730,4479,6767])
  }
  minOperations(nums: number[]): number {
    let operationsCount = 0
    let sorted = nums.sort(function(a, b) {
      return a - b;
    })
    let smallest = sorted[0]
    let biggest = sorted[sorted.length - 1]

    let checkSmallest = smallest
    let checkBiggest = smallest + sorted.length - 1

    let amountBetween = 0
    let smallestSaved = smallest
    let biggestSaved = biggest

    while (checkBiggest < biggest) {
      if (sorted.filter(function(item) {
        return (item >= checkSmallest && item <= checkBiggest)
      }).length > amountBetween) {
        amountBetween = sorted.filter(function(item) {
          return (item >= checkSmallest && item <= checkBiggest)
        }).length
        smallestSaved = checkSmallest
        biggestSaved = checkBiggest
      }
      checkSmallest++
      checkBiggest++
    }

    checkSmallest = smallestSaved
    checkBiggest = biggestSaved

    console.log(smallestSaved,biggestSaved)

    while (checkSmallest <= checkBiggest) {
      if(sorted.filter((v) => (v === checkSmallest)).length === 1) {
        checkSmallest++
      } else if (sorted.filter((v) => (v === checkSmallest)).length === 0) {
        if(sorted.filter(function(item) {
          return (item < smallestSaved)
        }).length > 0) {
          let i = 0
          while(i < sorted.length) {
            if (sorted[i] < smallestSaved) {
              sorted[i] = checkSmallest
              operationsCount++
              break
            }
            i++
          }
        } else if(sorted.filter(function(item) {
          return (item > biggestSaved)
        }).length > 0) {
          let i = 0
          while(i < sorted.length) {
            if (sorted[i] > biggestSaved) {
              sorted[i] = checkSmallest
              operationsCount++
              break
            }
            i++
          }
        } else {
          let i = 0
          let found = false
          while (!found && checkSmallest + i <= checkBiggest) {
            i++
            if(sorted.filter(function(item) {
              return (item == checkSmallest + i)
            }).length > 1) {
              let i2 = 0
              while(i2 < sorted.length) {
                if (sorted[i2] == checkSmallest + i) {
                  sorted[i2] = checkSmallest
                  found = true
                  operationsCount++
                  break
                }
                i2++
              }
            }
          }
        }
        checkSmallest++
      } else {
        while(sorted.filter((v) => (v === checkSmallest)).length > 1) {
          let i = 0
          while(i < sorted.length) {
            if (sorted[i] == checkSmallest) {
              sorted[i] = smallestSaved-1
              break
            }
            i++
          }
        }
      }

      if(checkSmallest > checkBiggest && (sorted.filter(function(item) {
        return (item < smallestSaved)
      }).length > 0 || sorted.filter(function(item) {
        return (item > biggestSaved)
      }).length > 0)) {
        checkSmallest = smallestSaved
      }

      console.log(sorted)
      console.log(operationsCount)
    }
    return operationsCount
  }
}
