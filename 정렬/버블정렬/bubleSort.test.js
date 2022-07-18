import {solution} from "./bubleSort";
import {mockList, mockListSorted, mockRandomList, mockRandomListSorted} from "../mock";

describe("Bubble sort", () => {
    it("example 1", () => {
        expect(solution(mockList)).toEqual(mockListSorted);
    });

    it("example 2", () => {
        expect(solution(mockRandomList)).toEqual(mockRandomListSorted);
    });
})