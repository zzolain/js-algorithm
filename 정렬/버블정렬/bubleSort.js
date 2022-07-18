/**
 * 버블 정렬
 * 시간복잡도: O(n^2)
 * => n + (n-1) + (n-2) + ... + 1
 * => n * (n+1) / 2
 * => O(n^2)
 */
export function solution(list) {
    let answer = list.slice();
    let temp = null;
    for(let i = 0; i < answer.length; i++) {
        for(let j = 0; j < (answer.length - 1 - i); j++) {
            if (answer[j] > answer[j + 1]) {
                temp = answer[j];
                answer[j] = answer[j + 1];
                answer[j + 1] = temp;
            }
        }
    }
    return answer;
}