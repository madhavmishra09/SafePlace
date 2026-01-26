import Typewriter from 'typewriter-effect'
function ChatLayout() {
  return (
    <>
    <div className="flex h-full items-center justify-center text-center font-robotomono text-[50px] text-white">
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
                    .typeString("Let's talk!")
                    .start()
                }}
              />
            </div>
    </>
  )
}

export default ChatLayout
