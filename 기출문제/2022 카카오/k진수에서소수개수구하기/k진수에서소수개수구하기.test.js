import {solution} from "./k진수에서소수개수구하기";

describe("k 진수에서 소수 개수 구하기", () => {
    it("예시1", () => {
        const n = 437674;
        const k = 3;
        const answer = 3;
        expect(solution(n, k)).toEqual(answer)
    });

    it("예시2", () => {
        const n = 110011;
        const k = 10;
        const answer = 2;
        expect(solution(n, k)).toEqual(answer)
    })
})