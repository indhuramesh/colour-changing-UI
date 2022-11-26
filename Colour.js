import React, { useState } from 'react'
import Select from 'react-select'
import './Colour.css'
function Form() {
  var colors=[
    {
        label : 'Purple',
        value : 'purple'
    },
    {
        label : 'Lavender',
        value : 'lavender'
    },
    {
        label : 'Lime',
        value : 'lime'
    },
    {
        label : 'Palegreen',
        value : 'pink'
    },

    {
        label : 'Red',
        value : 'red'
    },

    {
        label : 'Yellow',
        value : 'yellow'
    }
  ];
  var [setbgcolor,ddlvalue]=useState(colors.label);
  var ddlhandle = (e) => {
    ddlvalue(e.label);
  }
  return (
    <div className="body">
    <h1 className="h">Colour Changing UI</h1>
      <div className='select'>
        <Select options={colors} onChange={ddlhandle} className="select"></Select>
      </div>
      <div className='drop'>
        <style>{'.drop {background-color:'+setbgcolor+';}'}</style> 
      </div>
    </div>
  )
}
export default Form