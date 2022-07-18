/**
 * 선택 정렬
 * 시간복잡도: O(n^2)
 * => n + (n-1) + (n-2) + ... + 1
 * => n * (n+1) / 2
 * => O(n^2)
 */
export function solution(list) {
    let answer = list.slice();
    for(let i = 0; i < answer.length; i++) {
        let temp = null;
        let min = answer[i];
        let minIndex = i;
        for(let j = i; j < answer.length; j++) {
            if (answer[j] < min) {
                min = answer[j];
                minIndex = j;
            }
        }
        temp = answer[i];
        answer[i] = answer[minIndex];
        answer[minIndex] = temp;
    }
    return answer;
}