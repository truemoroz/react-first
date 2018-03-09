import React, {Component} from 'react';
import {Header, Input, Dropdown, TextArea, Form, Radio, Button, Checkbox, Tab, Table} from 'semantic-ui-react';
import TemplateAnswer from './TemplateAnswer';
import PropTypes from 'prop-types';

class TemplateTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drop: [
                {key: 'one', text: 'Одиночный ответ', value: 'one'},
                {key: 'many', text: 'Множественный ответ', value: 'many'},
                {key: 'free', text: 'Свободный ответ', value: 'free'},
            ],
            answer_type: '',
            template_name: ''
        }
    };
    static propTypes = {
        ChangeTemplateName: PropTypes.func,
    };

    ChangeTemplateName = (e) => {
        const newValue = e.target.value;
        this.setState({template_name:newValue});
        this.props.ChangeTemplateName(newValue);
    };


    SelectTypeAnswer = (e, {value}) => {
        // var value=this.refs.DropTypeAnswer.value;
        //alert(value);
        this.setState({answer_type: value});
        // alert(this.state.answer_type);
        // return (
        //     // console.log('SelectTypeAnswer')
        //     <TemplateAnswer/>
        // );
    };

    render() {
        return(
            <div>
                <div>Название шаблона</div>
                <Input placeholder='Новый шаблон' ref="newName" onChange={this.ChangeTemplateName} />

                <Header as='h2'>Выберите тип шаблона</Header>
                {/*<DropdownSimple onChange={(e) => this.SelectTypeAnswer(e)} options={this.state.drop_options}>one</DropdownSimple>*/}
                <Dropdown ref="DropTypeAnswer" button basic options={this.state.drop} selection
                          onChange={this.SelectTypeAnswer} placeholder='Выберите'
                          defaultValue={this.state.answer_type}/>
                {/*{alert(this.state.answer_type)}*/}
                <TemplateAnswer template_type={this.state.answer_type}/>


            </div>
        );
    }
}

export default TemplateTab;