const bikeValues = {
    city: 'Городской',
    road: 'Шоссейный',
    sport: 'Спортивный',
    electric: 'Электровелосипед',
    hybrid: 'Гибрид'
}

const statusValues = {
    new: 'Новое',
    in_progress: 'В процессе',
    done: 'Завершено'
}

const valueParser = (obj, key) => {
    return obj[key]
}

export {
    valueParser,
    bikeValues,
    statusValues
}