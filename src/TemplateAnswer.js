import React, {Component} from 'react';
import {Header, Input, Dropdown, TextArea, Form, Radio, Button, Checkbox, Tab, Table} from 'semantic-ui-react';

class TemplateAnswer extends Component {

    render() {
        return (
            <div>
                <a href="">Добавить ещё один ответ</a>
                <Table celled collapsing>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>Полностью согласен</Table.Cell>
                        <Table.Cell><Radio defaultChecked/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>Согласен</Table.Cell>
                        <Table.Cell><Radio defaultChecked/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell>Скорее согласен</Table.Cell>
                        <Table.Cell><Radio defaultChecked/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell>Скорее НЕ согласен</Table.Cell>
                        <Table.Cell><Radio defaultChecked/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>5</Table.Cell>
                        <Table.Cell>НЕ согласен</Table.Cell>
                        <Table.Cell><Radio defaultChecked/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>6</Table.Cell>
                        <Table.Cell>Полностью НЕ согласен</Table.Cell>
                        <Table.Cell><Radio defaultChecked/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>7</Table.Cell>
                        <Table.Cell>Затрудняюсь ответить</Table.Cell>
                        <Table.Cell><Radio defaultChecked/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>8</Table.Cell>
                        <Table.Cell>Введите текст нового вопроса</Table.Cell>
                        <Table.Cell><Radio/></Table.Cell>
                    </Table.Row>
                </Table>
                <a href="">Пропустить этот шаг</a>
            </ div>
        );
    }
}

export default TemplateAnswer;

