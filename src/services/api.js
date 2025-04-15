const USE_MOCKS = true;

const activityDataMapper = (dataFromApi) => {
    return dataFromApi.map((d) => d);
}

export const getActivityData = async () => {
    if (USE_MOCKS) {
        return [
            {
                name: '1',
                "Poids (kg)": 4000,
                "Calories brûlées (kCal)": 2400,
                amt: 2400,
            },
            {
                name: '2',
                "Poids (kg)": 3000,
                "Calories brûlées (kCal)": 1398,
                amt: 2210,
            },
            {
                name: '3',
                "Poids (kg)": 2000,
                "Calories brûlées (kCal)": 9800,
                amt: 2290,
            },
            {
                name: '4',
                "Poids (kg)": 2780,
                "Calories brûlées (kCal)": 3908,
                amt: 2000,
            },
            {
                name: '5',
                "Poids (kg)": 1890,
                "Calories brûlées (kCal)": 4800,
                amt: 2181,
            },
            {
                name: '6',
                "Poids (kg)": 2390,
                "Calories brûlées (kCal)": 3800,
                amt: 2500,
            },
            {
                name: '7',
                "Poids (kg)": 3490,
                "Calories brûlées (kCal)": 4300,
                amt: 2100,
            },
            {
                name: '8',
                "Poids (kg)": 3490,
                "Calories brûlées (kCal)": 4300,
                amt: 2100,
            },
            {
                name: '9',
                "Poids (kg)": 3490,
                "Calories brûlées (kCal)": 4300,
                amt: 2100,
            },
            {
                name: '10',
                "Poids (kg)": 3490,
                "Calories brûlées (kCal)": 4300,
                amt: 2100,
            },
        ];
    } else {
        // call api
        // const res = await fetch;
        // return activityDataMapper(res)
    }


}