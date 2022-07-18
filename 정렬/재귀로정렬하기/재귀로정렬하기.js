export function solution(list) {
    if (list.length === 1) return list;
    let min = list[0];
    let minIndex = 0;

    list.forEach((e, index) => {
        if (e >= min) return;
        min = e;
        minIndex = index;
    });
    list.splice(minIndex, 1);
    return [min].concat(solution(list));
}
