import {solution} from "./selectionSort";
import {mockList, mockListSorted} from "../mock";

describe("Selection Sort", () => {
    it("example 1", () => {
        const list = [1, 5, 3, 2, 4];
        const sorted = [1, 2, 3, 4, 5];
        expect(solution(list)).toEqual(sorted);
    });

    it("example 2", () => {
        expect(solution(mockList)).toEqual(mockListSorted);
    });
})
