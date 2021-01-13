import faker from 'faker'
import {IData} from "./dto";
import {sleep} from "../../../helpers";

export const fetchData = async () => {
    await sleep(1000)

    /** с шансом 30% произойдет ошибка */
    const randomError = faker.random.number(9)
    if (randomError < 2) {
        throw new Error("Что-то пошло не так...")
    }

    const data: IData[] = Array.from({length: 20}, (_, i) => ({
        id: i + 1,
        name: faker.name.firstName(),
        createdAt: faker.date.between("2020-01-01", new Date())
    }))

    return data
}
