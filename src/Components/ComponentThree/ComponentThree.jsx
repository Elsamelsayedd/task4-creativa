import React, { Component } from 'react'
import { UseConsumer } from '../../Context/LargeContext'

export default class ComponentThree extends Component {
    render() {
        return (
            <div>
                <UseConsumer>
                    {
                        (userName) => {
                            return (
                                <h2>{userName}</h2>
                            )
                        }
                    }
                </UseConsumer>
            </div>
        )
    }
}
