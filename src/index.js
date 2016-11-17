import './index.css';

import {getUsers, deleteUser} from './api/userApi';

getUsers().then(result => {
    let usersBody = '';

    result.forEach(user => {
        usersBody += `
        <tr>
            <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
        </tr>`;
    });

     global.document.getElementById('users').innerHTML = usersBody;

     setUpDeleteLinks();
})

function setUpDeleteLinks() {
    const deleteLinks = global.document.getElementsByClassName('deleteUser');

    // Array.from is needed because deleteLinks is an HTMLCollection
    // (which is iterable, but not an actual array)
    Array.from(deleteLinks, link => {
        link.onclick = function(event) {
            const elem = event.target;
            event.preventDefault();
            deleteUser(elem.attributes['data-id'].value);
            const row = elem.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }
    });
}
