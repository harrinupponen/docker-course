import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      temperature: "",
      weatherAsText: "",
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi();
    this.setState({icon: weather.weather[0].icon, temperature: weather.main.temp.toFixed(1), weatherAsText: weather.weather[0].description});
  }

  // added some features:
  // - The temperature
  // - Text description

  render() {
    const { icon, temperature, weatherAsText } = this.state;
    const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

    return (
      <div className="wData">
        <img src={iconUrl} alt="icon"/>
        <p>Temperature: {temperature} Celsius</p>
        <p>Weather Description: {weatherAsText}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
