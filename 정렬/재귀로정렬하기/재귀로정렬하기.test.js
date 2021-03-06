import {solution} from "./재귀로정렬하기";
import {mockList, mockListSorted, mockRandomList, mockRandomListSorted} from "../mock";

describe("재귀로 정렬하기", () => {
    it("example 1", () => {
        expect(solution(mockList)).toEqual(mockListSorted);
    });

    it("example 2", () => {
        expect(solution(mockRandomList)).toEqual(mockRandomListSorted);
    });
});
