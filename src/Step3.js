import React, {Component} from 'react';
import {Header, Input, Dropdown, TextArea, Form, Radio, Button, Checkbox, Grid} from 'semantic-ui-react';
import {Link, Route, Switch} from 'react-router-dom';

// import 'semantic-ui-css/semantic.min.css';

class Step3 extends Component {

    render() {
        return (
            <div>

                <Header as='h1' block>Создание опроса - этап 3 - Результирующая страница</Header>
                <Grid container>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header as="h4">Основной текст заголовка</Header>
                        </Grid.Column>
                        {/*<Input size='big'*/}
                        {/*placeholder='Социологическое исследование корпоративной культуры предприятий государственной холдинговой компании «Росэл»'/>*/}
                        <Grid.Column width={8}>
                            <Form>
                                <TextArea rows={4}
                                          placeholder='Мы благодарны Вам за то, что Вы нашли время ответить на вопросы!  '/>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header as="h4">Основной текст (опционально)</Header>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form>
                                <TextArea rows={6}
                                          placeholder=''/>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>

                            <Header as="h4"><Checkbox toggle label='Кнопка'/></Header>

                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div>Текст кнопки</div>
                            <Input placeholder='На портал РОСТЕХ'/>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div>Ссылка кнопки</div>
                            <Input placeholder='http://rostec.ru/'/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Link to='/Step4'><Button primary>Продолжить</Button></Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        );
    }
}

export default Step3;