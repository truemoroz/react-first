import React, {Component} from 'react';
import {Header, Input, Dropdown, TextArea, Form, Radio, Button, Checkbox, Tab, Table} from 'semantic-ui-react';
import {Link, Route, Switch} from 'react-router-dom';
import DropdownSimple from './Dropdown';
import TemplateAnswer from './TemplateAnswer';

// import 'semantic-ui-css/semantic.min.css';

class Step4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            panes: [
                {menuItem: 'Новый шаблон', render: () => <Tab.Pane>{this.DefaultTab()}</Tab.Pane>},
                // {menuItem: 'Тип 1', render: () => <Tab.Pane>{this.tab1}</Tab.Pane>},
                // {menuItem: 'Возраст', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>},
                // {menuItem: 'Стаж', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>},
                {
                    menuItem: <Button onClick={this.AddPane}>+1</Button>,
                    render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
                },
            ],
            drop_options: [
                {key: 'one', text: 'Одиночный ответ', value: 'one'},
                {key: 'many', text: 'Множественный ответ', value: 'many'},
                {key: 'free', text: 'Свободный ответ', value: 'free'},
            ],
            
            // tab1: [
            //     <div>
            //         <div>Текст кнопки</div>
            //         <Input placeholder='На портал РОСТЕХ'/>
            //         <Header as='h2'>Создай ответ</Header>
            //         <Dropdown_simple options={this.state.drop_options}>one</Dropdown_simple>
            //         <a href="">Добавить ещё один ответ</a>
            //         <Table celled collapsing>
            //             <Table.Row>
            //                 <Table.Cell>1</Table.Cell>
            //                 <Table.Cell>Полностью согласен</Table.Cell>
            //                 <Table.Cell><Radio defaultChecked/></Table.Cell>
            //             </Table.Row>
            //             <Table.Row>
            //                 <Table.Cell>2</Table.Cell>
            //                 <Table.Cell>Согласен</Table.Cell>
            //                 <Table.Cell><Radio defaultChecked/></Table.Cell>
            //             </Table.Row>
            //             <Table.Row>
            //                 <Table.Cell>3</Table.Cell>
            //                 <Table.Cell>Скорее согласен</Table.Cell>
            //                 <Table.Cell><Radio defaultChecked/></Table.Cell>
            //             </Table.Row>
            //             <Table.Row>
            //                 <Table.Cell>4</Table.Cell>
            //                 <Table.Cell>Скорее НЕ согласен</Table.Cell>
            //                 <Table.Cell><Radio defaultChecked/></Table.Cell>
            //             </Table.Row>
            //             <Table.Row>
            //                 <Table.Cell>5</Table.Cell>
            //                 <Table.Cell>НЕ согласен</Table.Cell>
            //                 <Table.Cell><Radio defaultChecked/></Table.Cell>
            //             </Table.Row>
            //             <Table.Row>
            //                 <Table.Cell>6</Table.Cell>
            //                 <Table.Cell>Полностью НЕ согласен</Table.Cell>
            //                 <Table.Cell><Radio defaultChecked/></Table.Cell>
            //             </Table.Row>
            //             <Table.Row>
            //                 <Table.Cell>7</Table.Cell>
            //                 <Table.Cell>Затрудняюсь ответить</Table.Cell>
            //                 <Table.Cell><Radio defaultChecked/></Table.Cell>
            //             </Table.Row>
            //             <Table.Row>
            //                 <Table.Cell>8</Table.Cell>
            //                 <Table.Cell>Введите текст нового вопроса</Table.Cell>
            //                 <Table.Cell><Radio/></Table.Cell>
            //             </Table.Row>
            //         </Table>
            //         {/*<Link to='/Step4'><Button primary>Продолжить</Button></Link>*/}
            //         <a href="">Пропустить этот шаг</a>
            //     </div>
            // ],


        };
    };


    AddPane = () => {
        //this.setState({checked: !this.state.checked});
        //this.state.panes.push({menuItem: 'Новый шаблон', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>});
        this.state.panes.splice(this.state.panes.length - 1, 0, {
            menuItem: 'Новый шаблон',
            render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
        });
        // this.panes.push({menuItem: 'Новый шаблон', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>});
    };


    eachPane = (item, i) => {
        return (
            <Tab.Pane>{item}</Tab.Pane>
            // <Block key={i} index={i} update={this.updateText} deleteBlock={this.deleteBlock}>
            //     {item}
            // </Block>
        );
    };

    DefaultTab = () => {

        return (
            <div>
                <div>Название шаблона</div>
                <Input placeholder='Новый шаблон' onChange={this.SelectTypeAnswer}/>
                <Header as='h2'>Выберите тип шаблона</Header>
                {/*<DropdownSimple onChange={(e) => this.SelectTypeAnswer(e)} options={this.state.drop_options}>one</DropdownSimple>*/}
                <Dropdown button basic options={this.state.drop_options}  onChange={this.SelectTypeAnswer} placeholder='Выберите'/>

            </div>
        );
    };

    SelectTypeAnswer = () => {

        // alert('SelectTypeAnswer');
        return (
            // console.log('SelectTypeAnswer')
            <TemplateAnswer/>
        );
    };


    render() {
        // var drop_options = [
        //     {key: 'one', text: 'Одиночный ответ', value: 'one'},
        //     {key: 'many', text: 'Множественный ответ', value: 'many'},
        //     // {key: '3', text: 'Choice 3', value: '3'},
        // ];

        // var panes = [
        //     {menuItem: 'Tab 1', render: () => <Tab.Pane>{this.Tab1_func()}</Tab.Pane>},
        //     {menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>},
        //     {menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>},
        //     {
        //         menuItem: <Button onClick={this.AddPane}>+1</Button>,
        //         render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
        //     },
        // ]

        // const panes = [
        //     { menuItem: 'Tab 1', pane: this.Tab1_func() },
        //     { menuItem: 'Tab 2', pane: this.Tab1_func() },
        //     { menuItem: 'Tab 3', pane: this.Tab1_func() },
        // ]
        // var panes = [
        //     {menuItem: 'Тип 1', render: () => <Tab.Pane>{tab1}</Tab.Pane>},
        //     {menuItem: 'Возраст', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>},
        //     {menuItem: 'Стаж', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>},
        //     {menuItem: <Button onClick={this.AddPane}>+1</Button>, render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>},
        // ];

        // var tab1 = `<div>
        //     <div>Текст кнопки</div>
        //     <Input placeholder='На портал РОСТЕХ'/>
        //     <Header as='h2'>Создай ответ</Header>
        //     <Dropdown_simple options={this.state.drop_options}>one</Dropdown_simple>
        //     <a href="">Добавить ещё один ответ</a>
        //     <Table celled collapsing>
        //         <Table.Row>
        //             <Table.Cell>1</Table.Cell>
        //             <Table.Cell>Полностью согласен</Table.Cell>
        //             <Table.Cell><Radio defaultChecked/></Table.Cell>
        //         </Table.Row>
        //         <Table.Row>
        //             <Table.Cell>2</Table.Cell>
        //             <Table.Cell>Согласен</Table.Cell>
        //             <Table.Cell><Radio defaultChecked/></Table.Cell>
        //         </Table.Row>
        //         <Table.Row>
        //             <Table.Cell>3</Table.Cell>
        //             <Table.Cell>Скорее согласен</Table.Cell>
        //             <Table.Cell><Radio defaultChecked/></Table.Cell>
        //         </Table.Row>
        //         <Table.Row>
        //             <Table.Cell>4</Table.Cell>
        //             <Table.Cell>Скорее НЕ согласен</Table.Cell>
        //             <Table.Cell><Radio defaultChecked/></Table.Cell>
        //         </Table.Row>
        //         <Table.Row>
        //             <Table.Cell>5</Table.Cell>
        //             <Table.Cell>НЕ согласен</Table.Cell>
        //             <Table.Cell><Radio defaultChecked/></Table.Cell>
        //         </Table.Row>
        //         <Table.Row>
        //             <Table.Cell>6</Table.Cell>
        //             <Table.Cell>Полностью НЕ согласен</Table.Cell>
        //             <Table.Cell><Radio defaultChecked/></Table.Cell>
        //         </Table.Row>
        //         <Table.Row>
        //             <Table.Cell>7</Table.Cell>
        //             <Table.Cell>Затрудняюсь ответить</Table.Cell>
        //             <Table.Cell><Radio defaultChecked/></Table.Cell>
        //         </Table.Row>
        //         <Table.Row>
        //             <Table.Cell>8</Table.Cell>
        //             <Table.Cell>Введите текст нового вопроса</Table.Cell>
        //             <Table.Cell><Radio/></Table.Cell>
        //         </Table.Row>
        //     </Table>
        //     {/*<Link to='/Step4'><Button primary>Продолжить</Button></Link>*/}
        //     <a href="">Пропустить этот шаг</a>
        // </div>`;


        return (
            <div>
                <Header as='h1' block>Создание опроса - этап 4 - Шаблоны ответов</Header>
                <div>Создайте и выберите шаблоны ответов</div>
                <Tab panes={this.state.panes}/>
                {/*{this.state.panes.map (this.eachPane)}*/}
                {/*<Tab panes={panes}/>*/}
                <Link to='/Step4'><Button primary>Продолжить</Button></Link>
            </div>

        );
    }
}

export default Step4;