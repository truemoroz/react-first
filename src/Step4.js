import React, {Component} from 'react';
import {Header, Input, Dropdown, TextArea, Form, Radio, Button, Checkbox, Tab, Table, Grid} from 'semantic-ui-react';
import {Link, Route, Switch} from 'react-router-dom';
import DropdownSimple from './Dropdown';
import TemplateAnswer from './TemplateAnswer';
import TemplateTab from './TemplateTab'

// import 'semantic-ui-css/semantic.min.css';

let panes_var = [
    {menuItem: 'Tab 1', pane: {key: 'tab1', content: <TemplateTab/>}},
    {menuItem: 'Tab 2', pane: {key: 'tab2', content: <div>Tab 2 Content</div>}},

];

const panes1 = [
    {menuItem: 'Tab 1', pane: {key: 'tab1', content: <TemplateTab/>}},
    {menuItem: 'Tab 3', pane: {key: 'tab3', content: <div>This tab contains an element</div>}},
];


class Step4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            template_name: ['новый шаблон'],
            panes: [
                // { menuItem: 'Tab 1', pane: { key: 'tab1', content: <TemplateTab/>} },
                {
                    menuItem: 'Новый шаблон',
                    pane: {key: 'tab1', content: <TemplateTab ChangeTemplateName={this.ChangeTemplateName}/>}
                },
                {menuItem: <Button onClick={this.AddPane}>+1</Button>, pane: {key: 'tab2', content: <TemplateTab/>}},
                // {menuItem: 'новый шаблон', render: () => <Tab.Pane>{this.DefaultTab()}</Tab.Pane>},
                // {
                //     menuItem: <Button onClick={this.AddPane}>+1</Button>,
                //     render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
                // },
            ],
            drop: [
                {key: 'one', text: 'Одиночный ответ', value: 'one'},
                {key: 'many', text: 'Множественный ответ', value: 'many'},
                {key: 'free', text: 'Свободный ответ', value: 'free'},
            ],
            answer_type: '',
            activeIndex: 0,

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
        //const newPane = { menuItem: 'Tab 1', pane: { key: 'tab3', content: <div>Tab 1 Content</div>} };
        const paneCopy = [...this.state.panes];
        paneCopy.splice(this.state.panes.length - 1, 0, {
            menuItem: 'Новый шаблон', pane: {key: 'tab3', content: <TemplateTab ChangeTemplateName={this.ChangeTemplateName}/>}
        });
        this.setState({panes: paneCopy});
        // // this.panes.push({menuItem: 'Новый шаблон', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>});
    };


    eachPane = (item, i) => {
        return (
            <Tab.Pane>{item}</Tab.Pane>
            // <Block key={i} index={i} update={this.updateText} deleteBlock={this.deleteBlock}>
            //     {item}
            // </Block>
        );
    };

    // DefaultTab = () => {
    //
    //     return (
    //         <div>
    //             <div>Название шаблона</div>
    //             <Input placeholder='Новый шаблон' onChange={this.ChangeTemplateName}/>
    //             <Header as='h2'>Выберите тип шаблона</Header>
    //             {/*<DropdownSimple onChange={(e) => this.SelectTypeAnswer(e)} options={this.state.drop_options}>one</DropdownSimple>*/}
    //             <Dropdown ref="DropTypeAnswer" button basic options={this.state.drop}
    //                       onChange={this.SelectTypeAnswer} placeholder='Выберите'
    //                       defaultValue={this.state.answer_type}/>
    //             {/*{alert(this.state.answer_type)}*/}
    //             <TemplateAnswer template_type={this.state.answer_type}/>
    //
    //
    //         </div>
    //     );
    // };
    handleTabChange = (e, {activeIndex}) => this.setState({activeIndex});


    ChangeTemplateName = (newName) => {
        //tabs.GetPanes();
        //const paneCopy = Object.assign({}, this.state.panes);
        //newPanes[this.state.activeIndex].menuItem=value;
        //const paneCopy = Object.assign({}, this.state.panes);
        const paneCopy = [...this.state.panes];
        paneCopy[this.state.activeIndex].menuItem = newName;
        this.setState({panes: paneCopy});


        // this.state.panes[0].menuItem=value;
        // this.setState({panes: this.state.panes});

    };

    GetTemplateName = () => {
        if (this.state.template_name) {
            return 'новый шаблон'
        } else {
            return this.state.template_name;
        }
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


    // var panes = [
    //     { menuItem: this.state.template_name, render: () => <Tab.Pane>{this.DefaultTab()}</Tab.Pane> },
    //     {
    //         menuItem: <Button onClick={this.AddPane}>+1</Button>,
    //         render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
    //     },
    // ];

    MakeTabs = () => {

        let tabs = [];
        // for (let i = 0; i < template_count; i++) {
        //     tabs.push({menuItem: this.state.template_name[i], render: () => <Tab.Pane>{this.DefaultTab()}</Tab.Pane>});
        // }
        // tabs.push({
        //     menuItem: <Button onClick={this.MakeTabs()}>+1</Button>,
        //     render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
        // });

        tabs.push({menuItem: this.state.template_name[0], render: () => <Tab.Pane>{this.DefaultTab()}</Tab.Pane>});
        tabs.push({
            menuItem: <Button onClick={this.AddPane}>+1</Button>,
            render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
        });
        this.setState({panes: tabs});
        // return tabs;

    };


    render() {


        //this.MakeTabs();
        // let tabs = new TabMenu([
        //     { menuItem: this.state.template_name, render: () => <Tab.Pane>{this.DefaultTab()}</Tab.Pane> },
        //     {
        //         menuItem: <Button onClick={this.AddPane}>+1</Button>,
        //         render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
        //     },
        // ]);
        // class TabMenu {
        //     property = 10;
        //
        //     constructor(panes) {
        //         this.panes = panes;
        //     }
        //
        //
        //     GetPanes() {
        //         return this.panes;
        //     }
        // }
        //
        // let tabs = new TabMenu([
        //     { menuItem: this.state.template_name, render: () => <Tab.Pane>{this.DefaultTab()}</Tab.Pane> },
        //     {
        //         menuItem: <Button onClick={this.AddPane}>+1</Button>,
        //         render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
        //     },
        // ]);
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
        // switch (this.state.answer_type) {
        //     case 'one':
        //
        //         break
        //
        //
        // };

        // AddPane = () => {
        //     //this.setState({checked: !this.state.checked});
        //     //this.state.panes.push({menuItem: 'Новый шаблон', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>});
        //     panes.splice(this.state.panes.length - 1, 0, {
        //         menuItem: 'Новый шаблон',
        //         render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
        //     });
        //     // this.panes.push({menuItem: 'Новый шаблон', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>});
        // };

        // var panes = [
        //     { menuItem: this.state.template_name, render: () => <Tab.Pane>{this.DefaultTab()}</Tab.Pane> },
        //     {
        //         menuItem: <Button onClick={this.AddPane}>+1</Button>,
        //         render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
        //     },
        // ];

        return (

            <div>
                <Header as='h1' block>Создание опроса - этап 4 - Шаблоны ответов</Header>
                <Grid container>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Header as="h4">Создайте и выберите шаблоны ответов</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Tab panes={this.state.panes} renderActiveOnly={false} onTabChange={this.handleTabChange}/>
                            {/*<Tab panes={this.state.panes}/>*/}
                            {/*{this.state.panes.map (this.eachPane)}*/}
                            {/*<Tab panes={panes}/>*/}
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

export default Step4;