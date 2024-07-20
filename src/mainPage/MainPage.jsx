import React, { useState } from 'react';
import classes from "./mainPage.module.css";


function MainPage() {
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);

    const handleInputChange = (event) => {
        setName(event.target.value)
    }

    const handleAddName = () => {
        if (name.trim() !== '') {
            setNames([...names, name.trim()])
            setName('')
        }
    }

    const handleNameChange = (index) => {
        const newName = name.trim()
        if (newName !== '') {
            const updatedNames = names.map((n, i) => (i === index ? newName : n))
            setNames(updatedNames)
            setName('')
        }
    }

    return (
        <div>
            <h1>Список имен</h1>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Введите имя"
            />
            <button onClick={handleAddName} disabled={name.trim() === ''}>Добавить</button>

            {names.length === 0 ? (
                <p>Список пуст</p>
            ) : (
                <ul>
                    {names.map((n, index) => (
                        <li key={index}>
                            {n}{' '}
                            <button onClick={() => handleNameChange(index)} disabled={name.trim() === ''}>
                                Поменять
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MainPage;
