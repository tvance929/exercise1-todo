var TODOS = ["buy food", "make food", "eat food"];

var TodoApp = React.createClass({
    render: function(){
        return(<div>{this.props.todos}hi</div>);
    },
});

React.render(<TodoApp todos={TODOS} />, document.getElementById('content'));
