import got, { Got, Options } from 'got'
import * as api from './api/index.js'

const baseClient = got.extend({
  prefixUrl: 'https://mapp.dailycafe.co.kr/',
  headers: {
    'user-agent': 'dailycafe unified',
    referer: 'https://mapp.dailycafe.co.kr/coupon/today/main'
  }
})

class Dailycafe {
  client: Got = baseClient

  constructor (options: Options) {
    this.client = this.client.extend(options)
  }

  public getDiscountsByDaily () {
    return api.coupons.getDailyDiscounts(this.client)
  }

  public getDiscountsRecentSeen () {
    return api.coupons.getRecentSeen(this.client)
  }

  public getDiscountsInterestedByFriends () {
    return api.coupons.getInterestedByFriends(this.client)
  }

  public getDiscountsFeatured () {
    return api.coupons.getFeaturedDiscounts(this.client)
  }
}

export {
  Dailycafe,
  baseClient,
  api
}
