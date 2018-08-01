import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positive: {
        percentage: 0,
        count: 0
      },
      negative: {
        percentage: 0,
        count: 0
      },
      neutral: {
        percentage: 0,
        count: 0
      }
    };
  }

  componentDidMount() {
    this.getStatus();

    this.intervalId = setInterval(this.getStatus, 9000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getStatus = () => {
    /**
     * TODO : Add endpoint here
     */

    // fetch('endpoint')
    //   .then(res => res.json())
    //   .then(data => this.setState({ data }))
  }

  objectType = (type, color, hover) => {
    return {
      datasets: [{
        data: [this.state[type].percentage, 100 - this.state[type].percentage],
        backgroundColor: [
          color,
          'rgba(88, 88, 88, 0.6)'
        ],
        hoverBackgroundColor: hover,
        borderWidth: 0,
      }]
    }
  }
  render() {
    const negative = this.objectType('negative', '#FF4566', '#FF6384');
    const neutral = this.objectType('neutral', '#EEBB03', '#EEBB76');
    const positive = this.objectType('positive', '#31FE45', '#31FE94');

    return (
      <div className="App">
        <h3 className="title">Sentiment Analysis Chart</h3>
        <div className="container">

          <div className="doughnut">
            <Doughnut
              data={negative}
              width={250}
              height={250}
              options={{
                maintainAspectRatio: false,
                cutoutPercentage: 90,
                tooltips: { enabled: false },
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  position: 'bottom',
                  text: `${this.state.negative.count} Tweets`,
                  padding: 15,
                  fontFamily: 'Dosis',
                  fontColor: '#FF4566',
                  fontSize: 18,
                }
              }}
            />
            <h3 className="percentage negative_color">{`${this.state.negative.percentage}%`}</h3>
            <p className="type">Negative</p>
          </div>

          <div className="doughnut">
            <Doughnut
              data={neutral}
              width={250}
              height={250}
              options={{
                maintainAspectRatio: false,
                cutoutPercentage: 90,
                tooltips: { enabled: false },
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  position: 'bottom',
                  text: `${this.state.neutral.count} Tweets`,
                  padding: 15,
                  fontFamily: 'Dosis',
                  fontColor: '#EEBB03',
                  fontSize: 18,
                }
              }}
            />
            <h3 className="percentage neutral_color">{`${this.state.neutral.percentage}%`}</h3>
            <p className="type">Neutral</p>
          </div>

          <div className="doughnut">
            <Doughnut
              data={positive}
              width={250}
              height={250}
              options={{
                maintainAspectRatio: false,
                cutoutPercentage: 90,
                tooltips: { enabled: false },
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  position: 'bottom',
                  text: `${this.state.positive.count} Tweets`,
                  padding: 15,
                  fontFamily: 'Dosis',
                  fontColor: '#31FE45',
                  fontSize: 18,
                }
              }}
            />
            <h3 className="percentage positive_color">{`${this.state.positive.percentage}%`}</h3>
            <p className="type">Positive</p>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
