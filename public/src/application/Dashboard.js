import React from 'react';
import ReactChartJS from 'react-chartjs';
import ChartJS from 'chart.js';

export default class Dashboard extends React.Component {

    constructor() {
        super();
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
            }
        };
    }

    render() {
        var chartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };

        return (
            <div className="ui grid">
                <div className="mt5 negative row">
                    <div className="sixteen wide column">
                        <h3><i className="line chart icon"></i> Incidents in the last six months</h3>
                        <div className="incidents-chart">
                            <ReactChartJS.Line data={this.state.chartData} options={chartOptions}></ReactChartJS.Line>
                        </div>
                    </div>
                </div>
                <div className="mt3 negative row">
                    <div className="sixteen wide column">
                        <h3><i className="wifi icon"></i> Latest attempts</h3>
                        <table className="ui basic divided celled attached table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Impact</th>
                                <th>Matched</th>
                                <th>IP</th>
                                <th>At</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>432</td>
                                <td>5</td>
                                <td><a href="">#132</a>, <a href="">#1337</a></td>
                                <td>127.0.0.1</td>
                                <td>Today at 4pm</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt3 negative row">
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