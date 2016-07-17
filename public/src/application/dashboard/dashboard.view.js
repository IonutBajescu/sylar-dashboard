import React from 'react';
import ReactChartJS from 'react-chartjs';
import { LatestIncidentsView } from 'incidents';

export default class DashboardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                labels: ["February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        fillColor: "rgba(53, 123, 101, .6)",
                        strokeColor: "#357b65",
                        pointColor: "#429a7e",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [59, 80, 81, 56, 55, 40]
                    }
                ]
            },
            latestAttempts: []
        };
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'LATEST_INCIDENTS_FETCH_REQUESTED',
            take: 3
        })
    }

    render() {
        var chartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };

        return (
            <div className="ui grid">
                <div className="row">
                    <div className="sixteen wide column">
                        <h3><i className="line chart icon"></i> Incidents in the last six months</h3>
                        <div className="incidents-chart">
                            <ReactChartJS.Line data={this.state.chartData} options={chartOptions}></ReactChartJS.Line>
                        </div>
                    </div>
                </div>
                <div className="mt2 row">
                    <div className="sixteen wide column">
                        <h3><i className="wifi icon"></i> Latest attempts</h3>
                        <LatestIncidentsView/>
                    </div>
                </div>
                <div className="mt2 row">
                    <div className="eight wide column">
                        <h3><i className="align justify icon"></i> Most matched rules</h3>
                        <table className="ui divided celled attached table">
                            <tbody>
                            <tr>
                                <td>Rule <a href="">#1321</a> from the <a href="">PHPIDS</a> filters.</td>
                            </tr>
                            <tr>
                                <td>Rule <a href="">#1232</a> from the <a href="">PHPIDS</a> filters.</td>
                            </tr>
                            <tr>
                                <td>Rule <a href="">#3231</a> from the <a href="">PHPIDS</a> filters.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="eight wide column">
                        <h3><i className="linkify icon"></i> Most targeted pages</h3>
                        <table className="ui divided celled attached table">
                            <tbody>
                            <tr>
                                <td>
                                    <a href="http://ionut-bajescu.com">http://ionut-bajescu.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="http://ionut-bajescu.com/about">http://ionut-bajescu.com/about</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="http://ionut-bajescu.com/posts/tags">http://ionut-bajescu.com/posts/tags</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}