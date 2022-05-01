import { Got } from 'got/dist/source'
import { baseClient } from '../index.js'
import { getDateFromNonStandardString } from '../utils.js'
import { IBaseResponse, TYesOrNo } from './base.js'

export interface ICouponResponse {
  activeIndex: number | null,
  addRows: number,
  alarmYn: boolean | null,
  beginRow: number,
  blockCnt: number,
  brandDiscountPrice: number | null,
  brandDiscountRate: number | null,
  brandNo: number | null,
  cardName: string | null,
  cardNo: number | null,
  closingDate: string
  closingYn: TYesOrNo,
  cnt: number | null,
  concernCnt: number | null,
  concernSeq: number | null,
  content: string | null,
  contentHtml: string | null,
  dailymallNo: number,
  dateDiff: string | null,
  delFilesSeq: number | null,
  discountPrice: number,
  discountRate: number,
  discountSeq: number,
  discountType: number,
  endDate: string,
  endRow: number,
  eventId: number | null,
  eventName: string | null,
  expireDateString: string | null,
  goodsDiscountImageUri: string,
  goodsId: string | null,
  goodsImageUrl: string | null,
  goodsName: string,
  goodsPrice: number,
  gubun1: string | null,
  gubun2: string | null,
  imageUri: string,
  isEditorYn: TYesOrNo | null,
  isValid: TYesOrNo,
  itemArr: Array<unknown> | null,
  lastvalue: unknown | null,
  likeCnt: number | null,
  likeYn: TYesOrNo | null,
  mainScroll: unknown | null,
  mediaType: unknown | null,
  mediaUri: string | null,
  memberNo: number | null,
  menuType: unknown | null,
  mmsMessage: unknown | null,
  mode: unknown | null,
  nickname: string | null,
  orderCnt: number,
  originGoodsName: string | null,
  page: number,
  productType: string,
  productTypeName: string | null,
  profilePhotoUri: string | null,
  recompanyId: number | null,
  recompanyName: string | null,
  refererUrl: string | null,
  regDate: string | null,
  regGubun: string | null,
  renewExpireDateString: string | null,
  returnUrl: string | null,
  rippleCnt: number | null,
  rows: number,
  salesLimitCount: number,
  schField: unknown | null,
  schString: unknown | null,
  scroll: unknown | null,
  startDate: string | null,
  storeNo: number | null,
  subDir: string | null,
  subMenuType: number | string | null,
  subScroll: unknown | null,
  talkCategoryNo: number | null,
  talkNo: number | null,
  title: string,
  totalBlockCnt: number,
  totalCnt: number,
  totalPageCnt: number,
  type: unknown | null,
  visibleYn: TYesOrNo | null
}

export const reformCouponResponse = async (coupon: ICouponResponse) => ({
  name: coupon.goodsName || coupon.title,
  image: coupon.imageUri || coupon.goodsDiscountImageUri,
  pricing: {
    original: coupon.goodsPrice,
    discounted: coupon.discountPrice
  },
  amount: {
    total: coupon.salesLimitCount,
    sold: coupon.orderCnt
  },
  closeAt: getDateFromNonStandardString(coupon.closingDate),
  endAt: getDateFromNonStandardString(coupon.endDate),
  isValid: coupon.isValid === 'y'
})

export interface IDailyDiscountsResponse extends IBaseResponse {
  data: Array<ICouponResponse>
}

export const getDailyDiscounts = async (client: Got = baseClient) => {
  const response = await client
    .post('coupon/today/todayDiscountListPermitted')
    .json<IDailyDiscountsResponse>()

  return {
    paging: {
      current: response.page,
      total: response.totalPageCnt
    },
    items: response.data.map(item => reformCouponResponse(item)),
    response
  }
}

export const getRecentSeen = async (client: Got = baseClient) => {
  const response = await client
    .post('coupon/today/recentViewCouponList')
    .json<IDailyDiscountsResponse>()

  return {
    paging: {
      current: response.page,
      total: response.totalPageCnt
    },
    items: response.data.map(item => reformCouponResponse(item)),
    response
  }
}

export const getInterestedByFriends = async (client: Got = baseClient) => {
  const response = await client
    .post('coupon/today/concernCouponListPermitted')
    .json<IDailyDiscountsResponse>()

  return {
    paging: {
      current: response.page,
      total: response.totalPageCnt
    },
    items: response.data.map(item => reformCouponResponse(item)),
    response
  }
}

export interface IFeaturedDiscountsByLikeCount extends IBaseResponse {
  data: {
    likeBrandName: string,
    likeBrandYn: TYesOrNo,
    list: Array<ICouponResponse>
  }
}

export const getFeaturedDiscounts = async (client: Got = baseClient) => {
  const response = await client
    .post('coupon/today/likeBrandCouponListPermitted')
    .json<IFeaturedDiscountsByLikeCount>()

  return {
    paging: {
      current: response.page,
      total: response.totalPageCnt
    },
    brand: {
      name: response.data.likeBrandName,
      isLikedByUser: response.data.likeBrandYn === 'y'
    },
    items: response.data.list.map(item => reformCouponResponse(item)),
    response
  }
}
