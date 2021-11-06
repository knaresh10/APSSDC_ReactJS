// type "rcc" to get the below function

import React, { Component } from 'react'

export default class Corporationbank extends Component {
    render() {
        return (
            <div>
                <h1>Corporation bank is located at {this.props.location} with name {this.props.data.uname} </h1>
            </div>
        )
    }
}
