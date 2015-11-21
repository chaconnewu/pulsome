import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-toolbox/lib/button';

var MyComponent = React.createClass({
  render: function () {
    return (
      <div>
        <Button label="Hello world" raised accent />
      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent />,
  document.getElementById('app')
);
