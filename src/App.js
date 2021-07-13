import React, { Component } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api/index";
import coronaImg from "./images/CovidImage.png";
import BannerImg from "./images/Banner.jpg";
import PreventionImg from "./images/preventionBanner.jpg";
class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country });
  };
  render() {
    //Destructuring
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.imageBackground}>
          <img src={coronaImg} alt="Covid-19" className={styles.image} />
        </div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <div className={styles.GuidelinesBG}>
          <h3
            className={styles.container}
            style={{
              fontFamily: "monospace",
              color: "white",
              marginTop: 60,
              fontSize: 40,
            }}
          >
            GuideLines
          </h3>
        </div>
        <img src={BannerImg} alt="Covid-19" className={styles.Banner} />
        <img
          src={PreventionImg}
          alt="Covid-19"
          className={styles.PreventionBanner}
        />
        <footer
          style={{
            backgroundColor: "rgba(14, 33, 58, 1)",
            width: "100%",
            color: "white",
            height: "20%",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <h2 style={{ margin: 10 }}>Developed By Yash Dabhade</h2>
        </footer>
      </div>
    );
  }
}

export default App;
