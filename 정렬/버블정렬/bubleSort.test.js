import {solution} from "./bubleSort";
import {mockList, mockListSorted} from "../mock";

describe("Bubble sort", () => {
    it("example 1", () => {
        const list = [5, 2, 3, 4, 1];
        const sorted = [1, 2, 3, 4, 5];
        expect(solution(list)).toEqual(sorted);
    });

    it("example 2", () => {
        expect(solution(mockList)).toEqual(mockListSorted);
    });
})