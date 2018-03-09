import React, {Component} from 'react';
import {Header, Input, Dropdown, TextArea, Form, Radio, Button, Grid} from 'semantic-ui-react';
import {Link, Route, Switch} from 'react-router-dom';

// import 'semantic-ui-css/semantic.min.css';


class Step2 extends Component {

    render() {
        return (
            <div>
                <Header as='h1' block>Создание опроса - этап 2 - Приветственная страница</Header>
                <Grid container>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header as="h4">Введите заголовок опроса</Header>
                        </Grid.Column>

                        {/*<Input size='big'*/}
                        {/*placeholder='Социологическое исследование корпоративной культуры предприятий государственной холдинговой компании «Росэл»'/>*/}
                        <Grid.Column width={8}>
                            <Form>
                            <TextArea rows={4}
                                      placeholder='Социологическое исследование корпоративной культуры предприятий государственной холдинговой компании «Росэл»'/>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header as="h4">Предполагаемое время прохождения</Header>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Input
                                label={{basic: true, content: 'мин'}}
                                labelPosition='right'
                                placeholder='60'
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header as="h4">Текст приветственной страницы</Header>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form>
                            <TextArea rows={15}
                                      placeholder='Уважаемый коллега!

Приглашаем Вас принять участие в анонимном социологическом опросе сотрудников предприятий государственной холдинговой компании «Российская электроника».
Вам предлагается высказать свое мнение о различных сторонах работы на Вашем предприятии.
Ваше мнение поможет выявить существующие недостатки и даст возможность улучшить внутренние процессы.

Заполнение опросника займет у Вас не более 20 минут.

Просим Вас заполнить опросник и передать ее ответственному за сбор анкет на Вашем предприятии.
Обработка анкет будет проводиться сотрудниками Корпоративной академии «Ростех».
Если у Вас возникнут вопросы по исследованию, Вы можете обратиться к сотруднику Академии Нечаевой Раисе, м.т. 8-916-500-7301, электронная почта: r.nechaeva@rt-academy.ru.      '/>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Link to='/Step3'><Button primary>Продолжить</Button></Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        );
    }
}

export default Step2;