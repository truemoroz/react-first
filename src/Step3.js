import React, {Component} from 'react';
import {Header, Input, Dropdown, TextArea, Form, Radio, Button, Checkbox} from 'semantic-ui-react';
import {Link, Route, Switch} from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';

class Step3 extends Component {

    render() {
        return (
            <div>
                <Header as='h1' block>Создание опроса - этап 3 - Результирующая страница</Header>
                <div>Основной текст заголовка</div>
                {/*<Input size='big'*/}
                {/*placeholder='Социологическое исследование корпоративной культуры предприятий государственной холдинговой компании «Росэл»'/>*/}
                <TextArea rows={4}
                          placeholder='Мы благодарны Вам за то, что Вы нашли время ответить на вопросы!  '/>
                <div>Основной текст (опционально)</div>
                <TextArea rows={6}
                          placeholder=''/>

                <Checkbox label='Кнопка' />
                <div>Текст кнопки</div>

                <Input placeholder='На портал РОСТЕХ'/>
                <div>Ссылка кнопки</div>
                <Input placeholder='http://rostec.ru/'/>
                <Link to='/Step4'><Button primary>Продолжить</Button></Link>
            </div>

        );
    }
}

export default Step3;