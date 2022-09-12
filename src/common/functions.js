

export function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
        return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
}

const units = [
    ['1000000000000', 't'],
    ['1000000000', 'g'],
    ['1000000', 'm'],
    ['1000', 'k']
]
export function getFormattedNumber(value) {
    let result = '';

    for(let i=0; i<units.length; i++) {
        const unit = units[i];
        const num = value / Number(unit[0]);

        if (num >= 1) {
            result = num.toFixed(1) + unit[1];
            break;
        }
    }

    if ('' === result) {
        result = value + '';
    }

    return result;
}

export function openGithub(url) {
    window.open(url);
}