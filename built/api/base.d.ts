export interface IBaseResponse {
    alarmYn: boolean | number;
    beginRow: number;
    blockCnt: number;
    cnt: number;
    debugMsg: string | null;
    endRow: number;
    gubun: string | null;
    gubun2: string | null;
    lastvalue: string | null;
    moveUrl: string | null;
    msg: string | null;
    page: number;
    result: boolean;
    resultCode: number;
    resultMsg: string | null;
    rows: number;
    sigunguName: string | null;
    targetMemberNo: number | null;
    title: string | null;
    totalCnt: number;
    totalPageCnt: number;
    unreadIdx: number | null;
}
export declare type TYesOrNo = 'y' | 'n';
