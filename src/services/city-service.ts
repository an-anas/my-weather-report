import { City } from '@/models/city';
import { useQuery } from '@tanstack/react-query';

const fetchCities = async (cityName: string) => {
    const params = new URLSearchParams({
        types: 'CITY',
        minPopulation: '10000',
        namePrefix: cityName
    });

    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?${params.toString()}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: { // TODO: Move to environment variables
            'X-RapidAPI-Key': '50789f6db7msh5450cb64e1846d2p1fd77djsnc64902745c10',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
};

export const useCityService = (cityName: string) => {
    return useQuery({
        queryKey: ['cities', cityName],
        queryFn: () => fetchCities(cityName).then((data) => data.data as City[]),
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};