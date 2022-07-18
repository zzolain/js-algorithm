export
function solution(id_list, reports, k) {
    const answer = new Array(id_list.length).fill(0);
    const users = id_list.reduce((prev, current, index) => {
        prev[current] = {
            index,
            receivedFrom: []
        }
        return prev;
    }, {});
    reports.forEach((report) => {
        const [reporter, reported] = report.split(" ");
        if (!users[reported]) return;
        if (users[reported].receivedFrom.includes(reporter)) return;
        users[reported].receivedFrom.push(reporter);
    });

    Object.values(users).forEach((user) => {
        if (user.receivedFrom.length < k) return;
        user.receivedFrom.forEach((reporter) => {
            answer[users[reporter].index] += 1;
        })
    })
    return answer;
}
