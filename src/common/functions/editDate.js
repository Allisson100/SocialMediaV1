const newDate = () => {
    const newDate = new Date()

    const day = newDate.getDate()
    const month = newDate.getMonth() + 1
    const year = newDate.getFullYear()

    const hour = newDate.getHours()
    const minutes = newDate.getMinutes()

    const formattedDate = `${month < 10 ? '0' : ''}${month}/${day < 10 ? '0' : ''}${day}/${year} - ${hour < 10 ? '0' : ''}${hour}:${minutes < 10 ? '0' : ''}${minutes}`

    return formattedDate
}

export default newDate