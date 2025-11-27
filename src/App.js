import "./App.css";

function App() {
  const topics = [
    {
      title: "React Basics",
      description: "Components, props, state – core building blocks of React.",
      status: "Not Started",
    },
    {
      title: "Data Structures",
      description: "Arrays, stacks, queues, linked lists, trees.",
      status: "In Progress",
    },
    {
      title: "JavaScript Revision",
      description: "ES6+, async/await, closures, arrow functions.",
      status: "Done",
    },
  ];

  return (
    <div className="App">
      <header className="header">
        <h1>Study Buddy</h1>
      </header>

      <div className="topics">
        {topics.map((t, i) => (
          <div key={i} className="topic-card">
            <h2>{t.title}</h2>
            <p>{t.description}</p>
            <p>
              <strong>Status:</strong> {t.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
