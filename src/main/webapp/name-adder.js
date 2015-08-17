var React = require('react'),
    NameAdder = React.createClass({
        handleAddName: function() {
            var nameEl = React.findDOMNode(this.refs.name),
                xhr = new XMLHttpRequest(),
                url = this.props.url;

            url = url + nameEl.value;

            xhr.open('POST', url);
            xhr.onload = function() {
                this.props.onAdded();
            }.bind(this);
            xhr.send();

            nameEl.value = null;
            nameEl.focus();
        },

        render: function() {
            return (
                <div>
                    <input ref="name"/>
                    <button onClick={this.handleAddName}>add</button>
                </div>
            );
        }
    });

module.exports = NameAdder;