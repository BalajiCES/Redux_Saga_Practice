import React,{useState}from 'react'
import {STORE_DATA_REQUESTED} from './data/action-types/actions';
import {useSelector,useDispatch} from 'react-redux';
import { API_KEY } from '../constants';
import './weather.css'


function Weather() {
    //useState
    const [cityName, setCityName] = useState('');
    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);

    const {weatherData} = useSelector(state => state.storeWeather); 
    const {loading = false,data = {} , error = false} = weatherData; 
    const dispatch = useDispatch();

    // functions
    const handleChange = (event) => {
       const value = event.target.value
       setCityName(value);
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();

      // dispatch(AsyncAPICall({
      //   q:cityName,
      //   appid:API_KEY
      // }))

      dispatch({
        type:STORE_DATA_REQUESTED,
        payload:{
         q:cityName,
         appid:API_KEY         
        }
      })
      
    }
  
    const kelvinToFarenheit = (k) => {
      return (k - 273.15).toFixed(2);
    };
  
    return (
        <div className="container">
        <h1 className="title">Weather App</h1> 
        <form id="form" onSubmit={handleSubmit}>
           <div className="form-control">
              <input type="text" className="input-control" placeholder="Enter Your City Name" name={cityName} onChange={handleChange}/>
           </div>
           <button type="submit">Search</button>
        </form> 
        <div className="result">
         {data.temperature > 0 && <h3>{(kelvinToFarenheit(data.temperature))}<sup>0</sup> C</h3>}
         {data.cityName && <h3><i className="fas fa-map-marker-alt"></i>{data.cityName}</h3>}
        </div>
     </div>
    )
}

export default Weather;
