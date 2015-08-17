var React = require('react'),
    NamesList = React.createClass({
        getInitialState: function() {
            return {
                names: []
            };
        },

        componentDidMount: function() {
            this.update();
        },

        render: function() {
            var names = this.state.names.map(function(name) {
                return (
                    <li>{name}</li>
                )
            });
            return (
                <div>
                    <ul>
                        {names}
                    </ul>
                </div>
            );
        },

        update: function() {
            var xhr = new XMLHttpRequest();

            xhr.open('GET', this.props.url);
            xhr.onload = function() {
                var names = JSON.parse(xhr.responseText);
                this.setState({names: names});
            }.bind(this);

            xhr.send();
        }
    });

module.exports = NamesList;