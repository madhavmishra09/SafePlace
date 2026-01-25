import {Routes, Route} from 'react-router-dom'
import Typewriter from 'typewriter-effect'
function ChatLayout() {
  return (
    <Routes>
      <Route path="/" element={
        
          <div className="flex h-[calc(100vh-64px)] items-center justify-center text-center font-robotomono text-[50px] text-white">
            <Typewriter
              options={{
                delay: 60,
                cursor: '|',
                html: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Welcome to Chatbot!<br/>How are you?')
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString('Let\'s talk!')
                  .start()
              }}
            />
          </div>
      } />
    </Routes>
  )
}

export default ChatLayout
