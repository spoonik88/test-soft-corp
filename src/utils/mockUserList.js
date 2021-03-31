export function getUserList(quan = 10) {
    let res = [];
    for (let i = quan; i > 0; i--) {
        res.push({
            date: `January ${i +2}, 2020`,
            type: "Afternoon",
            period: "15:00 - 23:00",
            hours: "8h",
            salary: `$1, ${i * 100}`,
            bonus: "30",
        })
    }
    return res;
}

export function getTitleList(quan = 10) {
    let res = [];
    for (let i = quan; i > 0; i--) {
        res.push({
            title: "Date",
        }, {
            title: "Shift type",
        }, {
            title: "Period",
        }, {
            title: "Hours",
        }, {
            title: "Salary (gross)",
        }, {
            title: "Bonus (gross)",
        }, )
    }
    return res;
}