import { SetStateAction, useState } from 'react';
import style from './style.module.css';
import { useDebounce } from 'use-debounce';
import { useCityService } from '@/services/city-service';
import { Props } from './model';

export const CitySearch = (props: Props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [cityName, setCityName] = useState('');
    const [debouncedCityName] = useDebounce(cityName, 500);
    const { isPending, error, data } = useCityService(debouncedCityName);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setCityName(event.target.value);
    };

    return (
        <div className={style.dropdown} >
            <div className={style.button} onClick={toggleDropdown}>🔎 Search</div>
            {isDropdownOpen && (
                <div className={style.dropdownContent}>
                    <input
                        type="text"
                        placeholder="Enter city name"
                        value={cityName}
                        onChange={handleInputChange}
                    />
                     <div> {/*onBlur={() => setIsDropdownOpen(false)}> */}
                        {!isPending && !error && data?.map((city) => (
                            <div
                                className={style.city}
                                key={city.id}
                                onClick={() => {props.setCity(city);toggleDropdown();}}
                            >
                                {city.name}, {city.country}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
