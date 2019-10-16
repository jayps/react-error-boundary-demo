import React from 'react';

function PeopleList({people}) {
    return (
        <ul>
            {people.map(person => (
                <li key={person.name}>
                    {person.name.trim()} - {person.role.trim()}
                </li>
            ))}
        </ul>
    );
}

export default PeopleList;
