import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form'

// import marked from 'marked'
let marked = require('marked')


class App extends Component {
  state = {
    markdown: `# Welcome to my React Markdown Previewer!

    ## This is a sub-heading...
    ### And here's some other cool stuff:
      
    Heres some code, \`<div></div>\`, between 2 backticks.
  
    \`\`\`
    // this is multi-line code:
  
    function anotherExample(firstLine, lastLine) {
      if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
      }
    }
    \`\`\`
      
    You can also make text **bold**... whoa!
    Or _italic_.
    Or... wait for it... **_both!_**
    And feel free to go crazy ~~crossing stuff out~~.
  
    There's also [links](https://www.freecodecamp.com), and
     > Block Quotes!
  
    And if you want to get really crazy, even tables:
  
    Wild Header | Crazy Header | Another Header?
    ------------ | ------------- | ------------- 
    Your content can | be here, and it | can be here....
    And here. | Okay. | I think we get it.
  
    - And of course there are lists.
      - Some are bulleted.
          - With different indentation levels.
            - That look like this.
  
  
    1. And there are numbererd lists too.
    1. Use just 1s if you want! 
    1. But the list goes on...
    - Even if you use dashes or asterisks.
    * And last but not least, let's not forget embedded images:
  
    ![React Logo w/ Text](https://goo.gl/Umyytc)
    `
  }
  updateMarkdown = function(markdown){
    this.setState({markdown});
  }
  render() {
    let { markdown } = this.state;
    return (
      <div className="App container">
        <div>
          <Form.Group controlId="formControlsTextarea" >
            <Form.Label>MarkDown Input</Form.Label>
            <Form.Control componentClass="textarea" placeholder="Enter Markdown" value={markdown} onChange={(event)=> this.updateMarkdown(event.target.value)} id="editor"></Form.Control>
          </Form.Group>
        </div>
        <div>
          <h1>Markdown output</h1>
          <div id="preview" dangerouslySetInnerHTML= {{__html: this.marked(markdown)}}>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
