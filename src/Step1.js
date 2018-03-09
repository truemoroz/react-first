import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
//import { connect } from 'react-redux';
import {Link, Route, Switch} from 'react-router-dom';
import {Header, Input, Dropdown, TextArea, Form, Radio, Button, Container, Grid} from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'moment/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import GridColumn from "semantic-ui-react/dist/es/collections/Grid/GridColumn";
import GridRow from "semantic-ui-react/dist/es/collections/Grid/GridRow";

// import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";


class Step1 extends Component {

    constructor(props) {
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

    handleChangeRadio = (e, {value}) => this.setState({value})

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

                <Grid container>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header as="h4">Введите название опроса</Header>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form><TextArea rows={3} fluid
                                            placeholder='Социологическое исследование корпоративной культуры предприятий государственной холдинговой компании «Росэл»'/></Form>
                        </Grid.Column>
                    </Grid.Row>
                    {/*<Input size='big'*/}
                    {/*placeholder='Социологическое исследование корпоративной культуры предприятий государственной холдинговой компании «Росэл»'/>*/}

                    <GridRow columns={4} verticalAlign='middle'>
                        <Grid.Column>
                            <Header as="h4">Выберите тип опроса</Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown button basic floating options={options} defaultValue='open'/>
                        </Grid.Column>
                    </GridRow>
                    <Grid.Row>
                        <GridColumn width={4}>
                            <Header as="h4">Уточните сроки проведения опроса</Header>
                        </GridColumn>
                        {/*<DatePicker visible={true} displayDate={new Date()} selectedDate={date} onChange={onChange}/>*/}
                        <GridColumn width={2}>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                        </GridColumn>
                        <GridColumn width={2}>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                        </GridColumn>
                    </Grid.Row>
                    <Grid.Row>
                        <GridColumn width={4}>
                            <Header as="h4">Длительность сессии участника опроса</Header>
                        </GridColumn>
                        {/*<Form>*/}

                        <GridColumn width={3}>
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
                        </GridColumn>
                        <GridColumn width={3}>
                            <Input
                                label={<Dropdown defaultValue='m' options={options_limit}/>}
                                labelPosition='right'
                                placeholder='Введите число'
                            />
                        </GridColumn>

                        {/*</Form>*/}
                    </Grid.Row>
                    <GridRow>
                        <GridColumn>
                            <Link to='/Step2'><Button primary>Продолжить</Button></Link>
                        </GridColumn>
                    </GridRow>
                </Grid>

            </div>
        );
    }
}

// export default connect(mapStateToProps)(Step1);
export default Step1;