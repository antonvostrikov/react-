import React from 'react'

const carStyle = {
    display: 'block'
}

export default (props) => {
    return (
        <div className='car' style={{ width: '500px', margin: '0 auto' }}>
            <h1>{props.car}</h1>
            <span style={carStyle}>{props.model}</span>
            <span style={carStyle}>{props.engine}</span>
            <span style={carStyle}>{props.color}</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, tellus non pharetra gravida, mauris tortor gravida lacus, in pretium.</p>
            <button onClick={props.changeTitle}>Click</button>
        </div>
    )
}
