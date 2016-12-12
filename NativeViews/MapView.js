// MapView.js
import React, { Component, PropTypes } from 'react';
import { requireNativeComponent } from 'react-native';

var RCTMapView = requireNativeComponent('RCTMapView', MapView);

export default class MapView extends Component {
    render() {
        return <RCTMapView {...this.props} />;
    }
}