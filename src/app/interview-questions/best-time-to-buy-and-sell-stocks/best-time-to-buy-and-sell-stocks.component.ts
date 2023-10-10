import { Component } from '@angular/core';

@Component({
  selector: 'app-best-time-to-buy-and-sell-stocks',
  templateUrl: './best-time-to-buy-and-sell-stocks.component.html',
  styleUrls: ['./best-time-to-buy-and-sell-stocks.component.scss']
})
export class BestTimeToBuyAndSellStocksComponent {
  maxProfit(prices: number[]): number {
    let buyIndex = 0
    let sellIndex = 1
    let maxProfit = 0
    let i = 1

    if(prices.length > 1) {
      maxProfit = prices[sellIndex]-prices[buyIndex]
      while (i < prices.length-1) {
        i++
        if(prices[i - 1] < prices[buyIndex]) {
          buyIndex = i - 1
        }

        if(prices[i] - prices[buyIndex] > maxProfit) {
          sellIndex = i
          console.log(sellIndex)
        }

        if(sellIndex>buyIndex) {
          maxProfit = prices[sellIndex]-prices[buyIndex]
        }
      }
    }

    if(maxProfit < 0) {
      return 0
    } else {
      return maxProfit
    }

    /*while(buyIndex < prices.length - 1) {
      while (sellIndex < prices.length) {
        if (prices[sellIndex] - prices[buyIndex] > priceDifference) {
          priceDifference = prices[sellIndex] - prices[buyIndex]
        }
        sellIndex++
      }
      buyIndex++
      sellIndex = buyIndex + 1
    }*/
  }
}
