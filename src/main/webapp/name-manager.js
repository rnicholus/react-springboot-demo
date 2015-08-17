var React = require('react'),
    NamesList = require('./names-list'),
    NameAdder = require('./name-adder'),
    NameManager = React.createClass({
        handleNameAdded: function() {
            this.refs.nameslist.update();
        },

        render: function() {
            return (
                <div>
                    <NameAdder url="/name/" onAdded={this.handleNameAdded}/>
                    <NamesList url="/names" ref="nameslist"/>
                </div>
            )
        }
    });

React.render(<NameManager/>, document.getElementById('container'));