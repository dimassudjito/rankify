import React from 'react';

const Alert = ({status, better}) => {
    /*
    Status:
    - start: tool is not started yet
    - progress: selection is being made
    - check: need to check  
    - continue: reset the tools
    - found: answers are found
    */

    if (status == "start"){
        return (
            <div class="alert alert-primary" role="alert">
                Choose number of contenders, type the options, and click start
            </div>
        );
    } 
    else if (status == "progress"){
        return null;
    }
    else if (status == "check"){
        return (
            <div class="alert alert-warning" role="alert">
                click check
            </div>
        );
    }
    else if (status == "continue"){
        return (
            <div class="alert alert-primary" role="alert">
                click continue
            </div>
        );
    }
    else if (status == "found"){
        return (
            <div class="alert alert-success" role="alert">
                top contenders are found: {better.toString()}
            </div>
        );
    }
    

    return null;
}

export default Alert;