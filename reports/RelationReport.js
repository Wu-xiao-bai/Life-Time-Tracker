/**
 * @jsx React.DOM
 */

var React = require('react');
var Moment = require('moment');
var _ = require('lodash');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var ReactBootStrap = require('react-bootstrap');
var numeral = require('numeral');

var LoadingMask = require('../components/LoadingMask');
var FullDateRangePicker = require('../components/FullDateRangePicker');
var DataAPI = require('../utils/DataAPI');
var Util = require('../utils/Util');


/**charts*/
var RankBar = require('../components/RankBar');

var RelationReport = React.createClass({

    mixins: [PureRenderMixin],

    getInitialState: function () {
        return {
            start: new Moment().startOf('month').toDate(),
            end: new Moment().endOf('month').toDate()
        };
    },

    render: function () {
        return <div className="ltt_c-report ltt_c-report-RelationReport">
            <h1 className="title"> Relationship </h1>
            <FullDateRangePicker
                    period="month"
                    onDateRangeChange={this.onDateRangeChange}/>
            <RankBar className="chart"
                type="peoples"
                backgroundColor="rgba(255, 255, 255, 0.1)"
                params={{
                    start: this.state.start,
                    end: this.state.end
                }}/>
        </div>
    },

    onDateRangeChange: function (start, end) {
        this.setState({
            start: start,
            end: end
        });
    },

    loadData: function () {
        DataAPI.Log.load({
            sum: true,
            group: "peoples"
        }).then(function (data) {
            var adaptedData = that.adapteData(data);
            that.setState({
                data: adaptedData
            });
        })
        .catch(function (err) {
            console.error(err.stack);
        });
    },
    adapteData: function (data) {
        return data.map(function (val) {});
    }
});


module.exports = RelationReport;