import {solution} from "./양과늑대";

describe("양과늑대", () => {
    it("example1", () => {
        const info = [0,0,1,1,1,0,1,0,1,0,1,1];
        const edges = [[0,1],[1,2],[1,4],[0,8],[8,7],[9,10],[9,11],[4,3],[6,5],[4,6],[8,9]];
        const result = 5;
        expect(solution(info, edges)).toEqual(result);
    })

    it("example2", () => {
        const info = [0,1,0,1,1,0,1,0,0,1,0];
        const edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,8],[6,9],[9,10]];
        const result = 5;
        expect(solution(info, edges)).toEqual(result);
    })
})