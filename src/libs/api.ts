export const getAdvice = async () => {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice`)
        const json = await response.json()

        console.log(json)
        return json

    }
    catch (error) {
        throw new Error('Algo Deu Errado')
    }
}