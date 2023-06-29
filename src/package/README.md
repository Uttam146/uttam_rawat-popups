# @uttam_rawat/popups

A beautiful, responsive, customizable, accessible replacement for javascript's popup boxes
The popups will close itself when the close button is clicked, or after a timeout.
Popups can be configured to appear at either the top or the bottom of an application window.

## Installation


```bash
npm i @uttam_rawat/popups
```

## Usage

```js
import React from "react";
import Popup from '@uttam_rawat/popups';

function App() {
  return (
    <div className="App">
      <Popup status={"success"} title={"Add title"} description={"Add Description"} duration={3000} isClosable={true} position={"top"}/>
      <h1>Learn Popups</h1>
      <h1>Learn Popups</h1>     
    </div>
  );
}

export default App;

```

# Status

You can use status to change the color of your popups

```js
import React from "react";
import Popup from '@uttam_rawat/popups';

function App() {
  const status = ['success', 'error', 'warning', 'info']
  return (
    <div className="App">
        // You can use status to change the color of your popups
      <Popup status={"warning"} title={"Add title"} description={"Add Description"} duration={3000} isClosable={true} position={"top"}/>
      <h1>Learn Popups</h1>
      <h1>Learn Popups</h1>
    </div>
  );
}

export default App;
```

# Changing the popups position
Using the position prop you can adjust where your popup will from.

```js
import React from "react";
import Popup from '@uttam_rawat/popups';

function App() {
  const position = [
    'top',
    'top-right',
    'top-left',
    'bottom',
    'bottom-right',
    'bottom-left',
  ];
  return (
    <div className="App">
      <Popup status={"warning"} title={"Add title"} description={"Add Description"} duration={3000} isClosable={true} position={"top"}/>
      <h1>Learn Popups</h1>
      <h1>Learn Popups</h1>
    </div>
  );
}

export default App;
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)