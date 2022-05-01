import { Got, Options } from 'got';
import * as api from './api/index.js';
declare const baseClient: Got;
declare class Dailycafe {
    client: Got;
    constructor(options: Options);
    getDiscountsByDaily(): Promise<{
        paging: {
            current: number;
            total: number;
        };
        items: {
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
        }[];
        response: api.coupons.IDailyDiscountsResponse;
    }>;
    getDiscountsRecentSeen(): Promise<{
        paging: {
            current: number;
            total: number;
        };
        items: {
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
        }[];
        response: api.coupons.IDailyDiscountsResponse;
    }>;
    getDiscountsInterestedByFriends(): Promise<{
        paging: {
            current: number;
            total: number;
        };
        items: {
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
        }[];
        response: api.coupons.IDailyDiscountsResponse;
    }>;
    getDiscountsFeatured(): Promise<{
        paging: {
            current: number;
            total: number;
        };
        brand: {
            name: string;
            isLikedByUser: boolean;
        };
        items: {
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
        }[];
        response: api.coupons.IFeaturedDiscountsByLikeCount;
    }>;
}
export { Dailycafe, baseClient, api };
