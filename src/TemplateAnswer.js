import React, {Component} from 'react';
import {
    Header, Input, Dropdown, TextArea, Form, Radio, Button, Checkbox, Tab, Grid, Table, Segment
} from 'semantic-ui-react';

class TemplateAnswer extends Component {
    constructor(props) {
        super(props);
        //this.state = {template_type: this.props.template_type};
        //this.onChange = this.onChange.bind(this);
        this.state = {
            radio: [
                {value: 0, text: 'Полностью согласен'},
                {value: 1, text: 'Согласен'},
                {value: 2, text: 'Скорее согласен'},
            ],
            checkbox: [
                {value: 0, text: 'Вариант 1'},
                {value: 1, text: 'Вариант 2'},
                {value: 2, text: 'Вариант 3'},
            ],
            link: [
                {value: 0, group: 'Группа 1', text: 'элемент1, элемент2'},
                {value: 1, group: 'Группа 2', text: 'элемент1, элемент2'},
                {value: 2, group: 'Группа 3', text: ''},
            ],

            radio_text: ['Полностью согласен', 'Согласен', 'Скорее согласен'],
            radio_value: '',
            active_radio: 0
        };
        this.handleRadioEdit = this.handleRadioEdit.bind(this);

    };

    handleRadioEdit(event) {
        //this.setState({value: event.target.value});
        const newText = event.target.value;
        //   console.log(event.target.name);
        const radioCopy = [...this.state.radio];

        for (let i = 0; i < radioCopy.length; i++) {
            //console.log(i + ': ' + radioCopy[i].value);
            if (radioCopy[i].value == event.target.name) {
                radioCopy[i].text = newText;

            }

        }
        //radioCopy[event.target.name].text = newText;
        this.setState({radio: radioCopy});
    };

    handleCheckboxEdit(event) {
        //this.setState({value: event.target.value});
        const newText = event.target.value;
        //   console.log(event.target.name);
        const checkboxCopy = [...this.state.checkbox];

        for (let i = 0; i < checkboxCopy.length; i++) {
            //console.log(i + ': ' + radioCopy[i].value);
            if (checkboxCopy[i].value == event.target.name) {
                checkboxCopy[i].text = newText;

            }

        }
        //radioCopy[event.target.name].text = newText;
        this.setState({checkbox: checkboxCopy});
    };

    handleLinkGroupEdit(event) {
        //this.setState({value: event.target.value});
        const newText = event.target.value;
        //   console.log(event.target.name);
        const linkCopy = [...this.state.link];

        for (let i = 0; i < linkCopy.length; i++) {
            //console.log(i + ': ' + radioCopy[i].value);
            if (linkCopy[i].value == event.target.name) {
                linkCopy[i].group = newText;

            }

        }
        //radioCopy[event.target.name].text = newText;
        this.setState({link: linkCopy});
    };

    handleLinkTextEdit(event) {
        //this.setState({value: event.target.value});
        const newText = event.target.value;
        //   console.log(event.target.name);
        const linkCopy = [...this.state.link];

        for (let i = 0; i < linkCopy.length; i++) {
            //console.log(i + ': ' + radioCopy[i].value);
            if (linkCopy[i].value == event.target.name) {
                linkCopy[i].text = newText;

            }

        }
        //radioCopy[event.target.name].text = newText;
        this.setState({link: linkCopy});
    }


    handleChangeRadio = (e, {value}) => {
        this.setState({radio_value: value});
        console.log('handleChangeRadio: ' + value);
    };

    addVariant = () => {
        const radioCopy = [...this.state.radio];
        radioCopy.push({value: this.state.radio[this.state.radio.length - 1].value + 1, text: 'Новый ответ'});
        this.setState({radio: radioCopy});
    };

    addVariantCheckbox = () => {
        const checkboxCopy = [...this.state.checkbox];
        checkboxCopy.push({
            value: this.state.checkbox[this.state.checkbox.length - 1].value + 1,
            text: 'Новый вариант'
        });
        this.setState({checkbox: checkboxCopy});
    };
    addVariantLink = () => {
        const linkCopy = [...this.state.link];
        linkCopy.push({
            value: this.state.link[this.state.link.length - 1].value + 1,
            group: 'Новая группа',
            text: ''
        });
        this.setState({link: linkCopy});
    };

    delVariant = (value) => {
        let radioCopy = [...this.state.radio];
        // //radioCopy = delete radioCopy[value];
        for (let i = 0; i < radioCopy.length; i++) {
            //  console.log(i + ': ' + radioCopy[i].value);
            if (radioCopy[i].value == value) {
                radioCopy.splice(i, 1);
            }

        }
        //radioCopy.splice(value, 1);
        this.setState({radio: radioCopy});
        // console.log('delVariant');
        //console.log(radioCopy);


    };

    delVariantCheckbox = (value) => {
        let checkboxCopy = [...this.state.checkbox];

        for (let i = 0; i < checkboxCopy.length; i++) {
            if (checkboxCopy[i].value == value) {
                checkboxCopy.splice(i, 1);
            }
        }
        this.setState({checkbox: checkboxCopy});
    };

    delVariantLink = (value) => {
        let linkCopy = [...this.state.link];

        for (let i = 0; i < linkCopy.length; i++) {
            if (linkCopy[i].value == value) {
                linkCopy.splice(i, 1);
            }
        }
        this.setState({link: linkCopy});
    };

    radioEdit = (value) => {
        //const newText = e.target.value;
        //  const newValue = this.refs.radioEditRef.props.value;
        const newText = this.refs.radioEditRef.value;
        const radioCopy = [...this.state.radio];
        radioCopy[value].text = newText;
        this.setState({radio: radioCopy});
        console.log(this);
    };

    setActiveRadio = (value) => {

        // const newValue = e.target.value;
        this.setState({active_radio: value});
        //  console.log('setActiveRadio: ' + value);
        //console.log('setActiveRadio');
        //console.log('active_radio: ' + this.state.active_radio);
    };

    setActiveCheckbox = (value) => {

        // const newValue = e.target.value;
        this.setState({active_checkbox: value});
        //  console.log('setActiveRadio: ' + value);
        //console.log('setActiveRadio');
        //console.log('active_radio: ' + this.state.active_radio);
    };

    makeRadio = (radio, i) => {
        // console.log({i});
        {/*<Form.Field key={i} ref='field' value={radio.value} inline onClick={this.setActiveRadio}>*/
        }
        {/*<Form.Field key={i} inline onClick={this.setActiveRadio.bind(null, radio.value)}>*/
        }
        {/*<Form.Field key={radio.value} inline onClick={this.setActiveRadio.bind(null, radio.value)}>*/
        }
        return (




            <Form.Field key={`some-value-${i}`} inline onClick={this.setActiveRadio.bind(null, radio.value)}>
                <Grid container>
                    <Grid.Row>
                        <Grid.Column verticalAlign='middle' width={1}>
                            <Radio
                                //label={radio.text}
                                name='radioGroup1'
                                value={radio.value}
                                checked={this.state.active_radio === radio.value}
                                // onChange={this.handleChangeRadio}
                            />
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Input name={radio.value} placeholder={radio.text} value={radio.text} ref="radioEditRef"
                                   onChange={this.handleRadioEdit}/>

                            {/*<Input placeholder={radio.text} value={radio.text} ref="radioEditRef" onChange={this.radioEdit.bind(this, radio.value)}/>*/}
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <Button onClick={this.delVariant.bind(null, radio.value)}>Удалить вариант</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form.Field>

        );


        // </Form.Field>

    };

    makeCheckbox = (checkbox, i) => {
        {/*<Form.Field key={`some-value-${i}`} inline onClick={this.setActiveCheckbox.bind(null, checkbox.value)}>*/
        }
        return (
            <Form.Field key={`some-value-${i}`} inline>
                <Grid container>
                    <Grid.Row>
                        <Grid.Column verticalAlign='middle' width={1}>
                            <Checkbox/>
                            {/*<Radio*/}
                            {/*//label={radio.text}*/}
                            {/*name='radioGroup1'*/}
                            {/*value={radio.value}*/}
                            {/*checked={this.state.active_radio === checkbox.value}*/}
                            {/*// onChange={this.handleChangeRadio}*/}
                            {/*/>*/}
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Input name={checkbox.value} placeholder={checkbox.text} value={checkbox.text}
                                   ref="radioEditRef"
                                   onChange={this.handleCheckboxEdit.bind(this)}/>

                            {/*<Input placeholder={radio.text} value={radio.text} ref="radioEditRef" onChange={this.radioEdit.bind(this, radio.value)}/>*/}
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <Button onClick={this.delVariantCheckbox.bind(null, checkbox.value)}>Удалить
                                вариант</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form.Field>

        );

    };

    makeLink = (link, i) => {
        {/*<Form.Field key={`some-value-${i}`} inline onClick={this.setActiveCheckbox.bind(null, checkbox.value)}>*/
        }
        return (
            <Form.Field key={`some-value-${i}`} inline>
                <Grid container>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Input name={link.value} placeholder={link.group} value={link.group}
                                   ref="radioEditRef"
                                   onChange={this.handleLinkGroupEdit.bind(this)}/>

                            {/*<Input placeholder={radio.text} value={radio.text} ref="radioEditRef" onChange={this.radioEdit.bind(this, radio.value)}/>*/}
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={6}>
                            <Input name={link.value} placeholder={link.text} value={link.text} fluid
                                   ref="radioEditRef"
                                   onChange={this.handleLinkTextEdit.bind(this)}/>
                        </Grid.Column>


                        <Grid.Column width={5}>
                            <Button onClick={this.delVariantLink.bind(null, link.value)}>Удалить
                                вариант</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form.Field>

        );

    };


    render() {
        //alert(this.state.template_type);
        const template_type = this.props.template_type;
        const radioTemplate = this.state.radio.map((radio, i) => {
            // return <Form.Field key={i}>{this.makeRadio(radio, i)}</Form.Field>
            return this.makeRadio(radio, i)
        });

        const checkboxTemplate = this.state.checkbox.map((checkbox, i) => {
            // return <Form.Field key={i}>{this.makeRadio(radio, i)}</Form.Field>
            return this.makeCheckbox(checkbox, i)
        });
        const linkTemplate = this.state.link.map((link, i) => {
            // return <Form.Field key={i}>{this.makeRadio(radio, i)}</Form.Field>
            return this.makeLink(link, i)
        });
        switch (template_type) {
            case 'none':
                return null;
                break;
            case 'one':
                return (
                    <Segment>
                        <Grid container>
                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <Button onClick={this.addVariant}>Добавить ещё один ответ</Button>
                                    {/*<a href="" onClick={this.addVariant}>Добавить ещё один ответ</a>*/}
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Form>
                                        {radioTemplate}
                                    </Form>


                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Segment>
                );
                break;
            case 'many':
                return (
                    <Segment>
                        <Grid container>
                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <Button onClick={this.addVariantCheckbox}>Добавить ещё один ответ</Button>
                                    {/*<a href="" onClick={this.addVariant}>Добавить ещё один ответ</a>*/}
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Form>
                                        {checkboxTemplate}
                                    </Form>


                                </Grid.Column>
                            </Grid.Row>
                        </Grid>


                    </Segment>
                );
                break;
            case 'free':
                return (
                    <Segment>
                        <Grid container>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Form>
                                        <TextArea rows={4}
                                                  placeholder='Поле для свободного ввода пользователем'/>
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                );
                break;
            case 'link':
                return (
                    <Segment>
                        <Grid container>

                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <Button onClick={this.addVariantLink}>Добавить группу</Button>
                                    {/*<a href="" onClick={this.addVariant}>Добавить ещё один ответ</a>*/}
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Form>
                                        <Grid container>
                                            <Grid.Row>
                                                <Grid.Column width={5}>
                                                    <Header as='h3'>Группа</Header>
                                                </Grid.Column>
                                                <Grid.Column width={5}>
                                                    <Header as='h3'>Элементы группы</Header>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Form>
                                        {linkTemplate}
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                )
                    ;
                break;
            default:
                return null;
        }


    }
}

export default TemplateAnswer;

