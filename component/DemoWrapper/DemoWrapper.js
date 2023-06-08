import React, {useState } from 'react';

/*class DemoWrapper extends Component {
    constructor(props) {
        super(props);

        const {
            isEditable
          } = props;

        this.state = {
            isEditable
        };

        this.state.setEditable = () => {
            this.state = 
        }

        window.setTimeout(() => {
            console.log(this.state);
            console.log("bong");
            this.state = { isEditable: true };
            console.log(this.state);
        }, 10000)
    }

    render() {
        const { children, context } = this.props;

        const Context = context || DemoWrapperContext;

        return (
            <Context.Provider value={this.state}>
                {children}
            </Context.Provider>
        );
    }
}*/

/*
DemoWrapper.propTypes = {
    children: PropTypes.any,
    context: PropTypes.object
  };
  
  DemoWrapper.defaultProps = {
    children: null,
    context: null
  };*/
  

const DemoWrapperContext = React.createContext(null);

function DemoWrapper({ isContentEditable, children }){
    
    const [isEditable, setEditable] = useState(isContentEditable);

    return (
        <DemoWrapperContext.Provider value={{ isEditable, setEditable }}>
            {children}
        </DemoWrapperContext.Provider>
    );
}


//export default DemoWrapperContext;
export { DemoWrapper, DemoWrapperContext };