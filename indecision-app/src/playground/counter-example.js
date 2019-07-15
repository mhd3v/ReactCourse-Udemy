class Counter extends React.Component{

    constructor(props){
        super(props);
        // bind to current component instance
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        // setState is a built in function which takes a function as an argument
        // that function needs to return the update state object
        this.setState((previousState) => {
            return {
                count: previousState['count'] + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((previousState) => {
            return {
                count: previousState['count'] - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });

        // obsolete syntax (DONT USE BECAUSE OF ASYNC NATURE) (DONT USE WHEN PREV STATE REQUIRED):
        // below code won't work as expected
        // ========
        // this.setState({
        //     count: 0
        // });

        // this.setState({
        //     count: this.state.count + 1
        // });
        // ========
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count ++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count --;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button> 
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )

//     // ReactDOM has pretty much one method that we'll use
//     // 1st arg = template
//     // 2nd arg = where to render
//     ReactDOM.render(template2, appRoot);
        
// };

// renderCounterApp();