import {solution} from "./양궁대회";

describe("양궁대회", () => {
    it("example1", () => {
        const n = 5;
        const info = [2,1,1,1,0,0,0,0,0,0,0];
        const result = [0,2,2,0,1,0,0,0,0,0,0];
        expect(solution(n, info)).toEqual(result);
    })

    it("example2", () => {
        const n = 1;
        const info = [1,0,0,0,0,0,0,0,0,0,0];
        const result = [-1];
        expect(solution(n, info)).toEqual(result);
    })

    it("example3", () => {
        const n = 9;
        const info = [0,0,1,2,0,1,1,1,1,1,1];
        const result = [1,1,2,0,1,2,2,0,0,0,0];
        expect(solution(n, info)).toEqual(result);
    })

    it("example4", () => {
        const n = 10;
        const info = [0,0,0,0,0,0,0,0,3,4,3];
        const result = [1,1,1,1,1,1,1,1,0,0,2];
        expect(solution(n, info)).toEqual(result);
    })
})