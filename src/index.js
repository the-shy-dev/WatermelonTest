import React from 'react'
import { render } from 'react-dom'

import { Database } from '@nozbe/watermelondb'
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs'

import { mySchema } from 'models/schema'

const adapter = new LokiJSAdapter({
  dbName: 'WatermelonDemo',
  schema: mySchema,
})

const database = new Database({
  adapter,
  modelClasses: [],
  actionsEnabled: true,
})

class Root extends React.Component{
    render(){
        return(
            <div>
                <h1> Hello </h1>
                {/* <h2> { item } </h2> */}
            </div>
        );
    }
}

render(<Root />, document.getElementById('application'))