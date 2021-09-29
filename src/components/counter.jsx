import React, {Component} from "react";

class Counter extends Component{

    // state={
    //     count: this.props.counter.value,
    //     tags: ["tag1", "tag2", "tag3"]
    // };
    styles ={
        fontSize: 10,
        fontWeight: "bold"
    };

    

    render() {

        return <React.Fragment>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()} </span>
        <button onClick={() => this.props.Increment(this.props.object)} className="btn btn-secondary btn-sm">Increment</button>      
        {/* <ul> */}
        {/* {this.TagsCheck()} */}
        {/* </ul> */}
        <button onClick={() => this.props.Delete(this.props.object.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </React.Fragment>;
    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.object.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() 
    {
        const count = this.props.object.value;
        
            return count === 0? "Zero" : count;
    }



    // TagsCheck()
    // {
    //     if(this.state.tags.length === 0) return <p> There are no tags</p>

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>
    // }

   
}


export default Counter;