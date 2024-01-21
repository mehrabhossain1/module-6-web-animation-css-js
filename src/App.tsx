import './App.css';

function App() {
  const name = 'Mehrab Hossain';

  const nameArr = name.split('');

  console.log(nameArr);

  return (
    <>
      <div className="main">
        <div className="container">
          {nameArr.map((item, i) => (
            <span
              className="alphabet"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
