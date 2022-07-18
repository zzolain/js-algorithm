// https://school.programmers.co.kr/learn/courses/30/lessons/92342

export function solution(n, info) {
    let maxLeadPoints = 0;
    let answer = Array(11).fill(0);

    for (let i = 1; i < (1 << 10); i++) {
        // 초기화
        let record = Array(11).fill(0);
        let apeach = 0;
        let ryan = 0;
        let leftShots = n;

        for (let j = 0; j < 10; j++) { // 과녁 점수 모든 경우의 수 순회
            const score = 10 - j;
            if (i & (1 << j)) { // 라이언 승리
                const neededShots = info[j] + 1;
                record[j] = neededShots;
                leftShots -= neededShots;
                ryan += score;
            } else { // 어피치 승리
                if (!info[j]) { continue; }
                apeach += score;
            }
        }
        if (leftShots < 0) { continue; }
        record[10] = leftShots
        const leadPoints = ryan - apeach;
        if (leadPoints < maxLeadPoints) { continue; }
        if (leadPoints > maxLeadPoints) {
            maxLeadPoints = leadPoints;
            answer = record;
            continue;
        }
        for (let i = 10; i > 0; i--) {
            if (record[i] > answer[i]) {
                answer = record;
                break;
            }
        }
    }
    if (maxLeadPoints === 0) return [-1];
    return answer;
}
