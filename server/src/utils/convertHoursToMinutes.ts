export default function convertHourToMinutes(time: string) {
    // 8:00
    const [hour, minutes] =  time.split(':').map(Number) // Desta forma eu terei [8, 0]
    const timeInMinutes = (hour * 60) + minutes // Desta forma eu retorno os minutos totais de time

    return timeInMinutes
}