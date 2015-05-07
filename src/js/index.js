var React = require('react');
window.React = React;

class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

require('domready')(() => {
  //show canvas demo
    React.render(<HelloMessage name="Sebastian" />, document.body);
});
