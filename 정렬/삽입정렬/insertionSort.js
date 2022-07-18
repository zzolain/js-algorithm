/**
 * 삽입 정렬
 * 시간복잡도: O(n^2)
 * => n + (n-1) + (n-2) + ... + 1
 * => n * (n+1) / 2
 * => O(n^2)
 * 단, 이미 정렬이 이루어진 데이터라면 연산을 실행하지 않기 때문에
 * O(n^2) 복잡도를 가진 정렬 방식 중에서는 가장 빠르고 효율적이라고 볼 수 있다.
 */
export function solution(list) {
    const answer = list.slice();
    let temp = null;
    for(let i = 0; i < answer.length - 1; i++) {
        let j = i;
        while(answer[j] > answer[j + 1]) {
            temp = answer[j];
            answer[j] = answer[j + 1];
            answer[j + 1] = temp;
            j--;
        }
    }
    return answer;
}