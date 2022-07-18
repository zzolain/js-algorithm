// const solution = require("./신고결과받기");
import {solution} from "./신고결과받기";

describe("report", () => {
    it("예시 1", () => {
        const id_list = ["muzi", "frodo", "apeach", "neo"];
        const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
        const k = 2;
        const expectation = [2,1,1,0];
        const result = solution(id_list, report, k);
        expect(result).toEqual(expectation);
    });

    it("예시 2", () => {
        const id_list = ["con", "ryan"];
        const report = ["ryan con", "ryan con", "ryan con", "ryan con"]
        const k = 3;
        const expectation = [0, 0];
        const result = solution(id_list, report, k);
        expect(result).toEqual(expectation);
    })
})