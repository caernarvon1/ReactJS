import React from 'react';
import ReactDOM from 'react-dom/client';

class Counting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <h1>You clicked {this.state.count} times</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}

// Mengekspor kelas Counting agar bisa digunakan di tempat lain
export default Counting;

// Render komponen Counting ke elemen root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counting />);
