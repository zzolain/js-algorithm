import {solution} from "./주차요금계산";

describe("주차요금계산", () => {
    it("example 1", () => {
        const fees = [180, 5000, 10, 600]
        const record = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]
        const result = [14600, 34400, 5000]
        expect(solution(fees, record)).toEqual(result);
    })

    it("example 2", () => {
        const fees = [120, 0, 60, 591]
        const record = ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]
        const result = [0, 591]
        expect(solution(fees, record)).toEqual(result);
    })

    it("example 3", () => {
        const fees = [1, 461, 1, 10]
        const record = ["00:00 1234 IN"]
        const result = [14841]
        expect(solution(fees, record)).toEqual(result);
    })
})