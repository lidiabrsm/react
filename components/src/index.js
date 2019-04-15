import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ComponentDetail from './ComponentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (        
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to do this?
            </ApprovalCard>            
            <ApprovalCard>
                <ComponentDetail 
                    author="Sam" 
                    timeAgo="Today at 04:45 PM" 
                    text="Hi there" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <ComponentDetail 
                    author="Alex" 
                    timeAgo="Today at 02:00 AM" 
                    text="Hey, how are you?" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <ComponentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 08:00 PM" 
                    text="Great to see you here!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)