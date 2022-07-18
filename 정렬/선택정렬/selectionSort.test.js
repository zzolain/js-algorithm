import {solution} from "./selectionSort";
import {mockList, mockListSorted, mockRandomList, mockRandomListSorted} from "../mock";

describe("Selection Sort", () => {
    it("example 1", () => {
        expect(solution(mockList)).toEqual(mockListSorted);
    });

    it("example 2", () => {
        expect(solution(mockRandomList)).toEqual(mockRandomListSorted);
    });
})
