import React, {Component} from 'react';
// import React from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'


export default class DropdownSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // edit: false,
            // checked: true,
        };
        //this.onChange = this.onChange.bind(this);
    };

    // onChange() {
    // }


    render() {
        // const options = [
        //     {key: '1', text: 'Choice 1', value: '1'},
        //     {key: '2', text: 'Choice 2', value: '2'},
        //     {key: '3', text: 'Choice 3', value: '3'},
        // ];
        const options = this.props.options;
        return (



                <Dropdown button basic options={options} defaultValue={this.props.children} />


        );
    }

}

//export default DropdownSimple;