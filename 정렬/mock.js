import {getRandomInt} from "../util";

export const mockList = Array(getRandomInt(1, 1000)).fill(0).map(_ => getRandomInt(-100, 100));
export const mockListSorted = mockList.slice().sort((a, b) => a - b);