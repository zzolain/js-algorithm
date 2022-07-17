import {solution} from "./재귀로정렬하기";

describe("재귀로 정렬하기", () => {
    it("example 1", () => {
        const list = [1, 10, 4, 5, 9, 6, 3, 7, 2, 8];
        const sorted = list.slice().sort((a, b) => a - b);
        expect(solution(list)).toEqual(sorted);
    });

    it("example 2", () => {
        const list = [17, 1, 10, 13, 20, 4, 5, 19, 14, 11, 9, 6, 12, 3, 7, 15, 2, 8, 16, 0, -1, 18];
        const sorted = list.slice().sort((a, b) => a - b);
        expect(solution(list)).toEqual(sorted);
    });
})