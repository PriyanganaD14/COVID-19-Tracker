import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);   //destructure required data from object to fetch


        return { confirmed, recovered, deaths, lastUpdate };
    }
    catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map(               // fetch required data from 'data' array.
            (dailyData) => ({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,

            })
        );

        return modifiedData;
    }

    catch (error) {

    }
}