import { Got } from 'got/dist/source';
import { IBaseResponse, TYesOrNo } from './base.js';
export interface ICouponResponse {
    activeIndex: number | null;
    addRows: number;
    alarmYn: boolean | null;
    beginRow: number;
    blockCnt: number;
    brandDiscountPrice: number | null;
    brandDiscountRate: number | null;
    brandNo: number | null;
    cardName: string | null;
    cardNo: number | null;
    closingDate: string;
    closingYn: TYesOrNo;
    cnt: number | null;
    concernCnt: number | null;
    concernSeq: number | null;
    content: string | null;
    contentHtml: string | null;
    dailymallNo: number;
    dateDiff: string | null;
    delFilesSeq: number | null;
    discountPrice: number;
    discountRate: number;
    discountSeq: number;
    discountType: number;
    endDate: string;
    endRow: number;
    eventId: number | null;
    eventName: string | null;
    expireDateString: string | null;
    goodsDiscountImageUri: string;
    goodsId: string | null;
    goodsImageUrl: string | null;
    goodsName: string;
    goodsPrice: number;
    gubun1: string | null;
    gubun2: string | null;
    imageUri: string;
    isEditorYn: TYesOrNo | null;
    isValid: TYesOrNo;
    itemArr: Array<unknown> | null;
    lastvalue: unknown | null;
    likeCnt: number | null;
    likeYn: TYesOrNo | null;
    mainScroll: unknown | null;
    mediaType: unknown | null;
    mediaUri: string | null;
    memberNo: number | null;
    menuType: unknown | null;
    mmsMessage: unknown | null;
    mode: unknown | null;
    nickname: string | null;
    orderCnt: number;
    originGoodsName: string | null;
    page: number;
    productType: string;
    productTypeName: string | null;
    profilePhotoUri: string | null;
    recompanyId: number | null;
    recompanyName: string | null;
    refererUrl: string | null;
    regDate: string | null;
    regGubun: string | null;
    renewExpireDateString: string | null;
    returnUrl: string | null;
    rippleCnt: number | null;
    rows: number;
    salesLimitCount: number;
    schField: unknown | null;
    schString: unknown | null;
    scroll: unknown | null;
    startDate: string | null;
    storeNo: number | null;
    subDir: string | null;
    subMenuType: number | string | null;
    subScroll: unknown | null;
    talkCategoryNo: number | null;
    talkNo: number | null;
    title: string;
    totalBlockCnt: number;
    totalCnt: number;
    totalPageCnt: number;
    type: unknown | null;
    visibleYn: TYesOrNo | null;
}
export declare const reformCouponResponse: (coupon: ICouponResponse) => Promise<{
    name: string;
    image: string;
    pricing: {
        original: number;
        discounted: number;
    };
    amount: {
        total: number;
        sold: number;
    };
    closeAt: {
        year: string;
        month: string;
        date: string;
        hour: string;
        minute: string;
        second: string;
    };
    endAt: {
        year: string;
        month: string;
        date: string;
        hour: string;
        minute: string;
        second: string;
    };
    isValid: boolean;
}>;
export interface IDailyDiscountsResponse extends IBaseResponse {
    data: Array<ICouponResponse>;
}
export declare const getDailyDiscounts: (client?: Got) => Promise<{
    paging: {
        current: number;
        total: number;
    };
    items: Promise<{
        name: string;
        image: string;
        pricing: {
            original: number;
            discounted: number;
        };
        amount: {
            total: number;
            sold: number;
        };
        closeAt: {
            year: string;
            month: string;
            date: string;
            hour: string;
            minute: string;
            second: string;
        };
        endAt: {
            year: string;
            month: string;
            date: string;
            hour: string;
            minute: string;
            second: string;
        };
        isValid: boolean;
    }>[];
    response: IDailyDiscountsResponse;
}>;
export declare const getRecentSeen: (client?: Got) => Promise<{
    paging: {
        current: number;
        total: number;
    };
    items: Promise<{
        name: string;
        image: string;
        pricing: {
            original: number;
            discounted: number;
        };
        amount: {
            total: number;
            sold: number;
        };
        closeAt: {
            year: string;
            month: string;
            date: string;
            hour: string;
            minute: string;
            second: string;
        };
        endAt: {
            year: string;
            month: string;
            date: string;
            hour: string;
            minute: string;
            second: string;
        };
        isValid: boolean;
    }>[];
    response: IDailyDiscountsResponse;
}>;
export declare const getInterestedByFriends: (client?: Got) => Promise<{
    paging: {
        current: number;
        total: number;
    };
    items: Promise<{
        name: string;
        image: string;
        pricing: {
            original: number;
            discounted: number;
        };
        amount: {
            total: number;
            sold: number;
        };
        closeAt: {
            year: string;
            month: string;
            date: string;
            hour: string;
            minute: string;
            second: string;
        };
        endAt: {
            year: string;
            month: string;
            date: string;
            hour: string;
            minute: string;
            second: string;
        };
        isValid: boolean;
    }>[];
    response: IDailyDiscountsResponse;
}>;
export interface IFeaturedDiscountsByLikeCount extends IBaseResponse {
    data: {
        likeBrandName: string;
        likeBrandYn: TYesOrNo;
        list: Array<ICouponResponse>;
    };
}
export declare const getFeaturedDiscounts: (client?: Got) => Promise<{
    paging: {
        current: number;
        total: number;
    };
    brand: {
        name: string;
        isLikedByUser: boolean;
    };
    items: Promise<{
        name: string;
        image: string;
        pricing: {
            original: number;
            discounted: number;
        };
        amount: {
            total: number;
            sold: number;
        };
        closeAt: {
            year: string;
            month: string;
            date: string;
            hour: string;
            minute: string;
            second: string;
        };
        endAt: {
            year: string;
            month: string;
            date: string;
            hour: string;
            minute: string;
            second: string;
        };
        isValid: boolean;
    }>[];
    response: IFeaturedDiscountsByLikeCount;
}>;
