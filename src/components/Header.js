import React from 'react';

function Header({ toggleForm, showForm }) {
  return (
    <header className="header">
            <h1>My Task App</h1>
            <button onClick={toggleForm}>
              {showForm ? 'Close' : 'Add Task'}
            </button>
    </header>
  );
}

export default Header;
