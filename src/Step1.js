import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
//import { connect } from 'react-redux';
import {Link, Route, Switch} from 'react-router-dom';
import {Header, Input, Dropdown, TextArea, Form, Radio, Button} from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'moment/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';






class Step1 extends Component {

    constructor (props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    handleChangeRadio = (e, { value }) => this.setState({ value })

    render() {
        const options = [
            {key: 'open', text: 'Открытый', value: 'open'},
            {key: 'close', text: 'Закрытый', value: 'close'},
        ];
        const options_limit = [
            {key: 'm', text: 'минут', value: 'm'},
            {key: 'h', text: 'часов', value: 'h'},
            {key: 'd', text: 'дней', value: 'd'},
        ];
        // const {date, onChange} = this.props;

        return (

            <div>

                <Header as='h1' block>Создание опроса - этап 1</Header>
                <div>Введите название опроса</div>
                {/*<Input size='big'*/}
                {/*placeholder='Социологическое исследование корпоративной культуры предприятий государственной холдинговой компании «Росэл»'/>*/}
                <TextArea rows={4}
                          placeholder='Социологическое исследование корпоративной культуры предприятий государственной холдинговой компании «Росэл»'/>
                <div>Выберите тип опроса</div>
                <Dropdown button basic floating options={options} defaultValue='open'/>
                <div>Уточните сроки проведения опроса</div>
                {/*<DatePicker visible={true} displayDate={new Date()} selectedDate={date} onChange={onChange}/>*/}
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                <div>Длительность сессии участника опроса</div>
                <Form>

                    <Form.Field>
                        <Radio
                            label='Без ограничений'
                            name='radioGroup'
                            value='not_limit'
                            checked={this.state.value === 'not_limit'}
                            onChange={this.handleChangeRadio}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Ограничена'
                            name='radioGroup'
                            value='limit'
                            checked={this.state.value === 'limit'}
                            onChange={this.handleChangeRadio}
                        />
                    </Form.Field>
                    <Input
                        label={<Dropdown defaultValue='m' options={options_limit} />}
                        labelPosition='right'
                        placeholder='Введите число'
                    />
                </Form>
                <Link to='/Step2'><Button primary>Продолжить</Button></Link>

            </div>
        );
    }
}

// export default connect(mapStateToProps)(Step1);
export default Step1;