import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = "342d4922-3d30-4d34-abc1-6fe1b19f97af";

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return(
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App;