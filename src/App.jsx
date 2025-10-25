
import { useNavigate } from 'react-router-dom'
import Reshma from './assets/reshma.jpeg';
import './App.css';
function App() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/backfile')
  }
  return (
    <><div className='h-screen m-0 bg-black '  >
      <div className="container">
        <div className="hi">
          <p>HELLO 🖐 I'm RESHMA LAKSHMANAN</p>
        </div>
        <div className="contain">
          <div className="dev">
            <li className="role" id='web'>Web developer</li>
            <li className="role" id='cw'>Content Writer</li>
            <li className="role" id='des'>Designer</li>
            <li className="role" id='tut'>Tutor</li>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-12 p-8'>
        <div className='w-3/4  justify-center align-middle p-2'>
          <p id="para" className=' p-8  rounded-3xl  border-2 border-slate-800 shadow-slate-700 shadow-xl'>Since school, I have been interested in computer science and coding, which sparked my curiosity in technology from an early age. This passion led me to pursue a B.E. in Electronics and Communication Engineering, where I could explore both software and hardware, understanding how systems and devices truly work. During my 2nd year of college, I completed an Advanced Diploma in Computer Programming (ADCP) with distinction, covering C, C++, and Java, and gained strong knowledge in Object-Oriented Programming (OOP). After graduation, I joined a Java Fullstack internship at Inmakes Infotech, where I realized my true interest lies in frontend development and UI/UX design. I decided to focus entirely on frontend technologies, dedicating significant time to mastering HTML, CSS, JavaScript, React, and Tailwind CSS, and now have hands-on experience in building responsive, interactive, and visually appealing web applications.</p>
         <div >
         <button onClick={handleClick} id="btn" className='px-5 text-white py-2 mt-9 rounded-3xl flex justify-end ml-10 cursor-pointer bg-blue-600 hover:bg-blue-400'>Continue</button>
        </div></div>
        <div className='w-1/4 justify-center align-middle '>
          <img id="image" className='rounded-3xl w-64 h-64 object-cover' src={Reshma} alt="" />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

 