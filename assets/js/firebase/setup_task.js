import { createTask, onGetTask, updateTask, deleteTask, getTask } from "./firebase.js";

const taskForm = document.getElementById("create-form");
const tasksContainer = document.getElementById("tasks-container");

let id = "";
let editStatus = false;
let userGlobal;

export default function setupTask(user) {
    userGlobal = user;
    console.log(user);
    onGetTask((querySnapshot) => {
        let html = '';

        querySnapshot.forEach(doc => {
            const data = doc.data();

            const numLines = data.description.split('\n').length;
            const backgroundSize = `calc(${numLines * 10}px + 530px)`; // Ajusta 20px por línea y agrega 200px como tamaño mínimo
            console.log(data)

            html += `
            <div class="card mb-3" style="background-size: ${backgroundSize};">
            <div class="card-body position-relative">
                <h6> ${data.displayName}</h6>
                <h5> ${data.date}</h5>
                <h5> ${data.time}</h5>
                <div class="position-absolute top-0" style="right: 10px;">
                    <img src="${data.photoURL}" class="rounded-circle mt-4" style="width: 110px; height: 110px;" alt="Imagen de perfil">
                </div>
                <h4 class="card-title">${data.title}</h4>
                <p class="card-text">${data.description}</p>
                <div class="row">
                    <button class='btn btn-rojo btn-delete-custom mx-auto col-5' data-id='${doc.id}'>Delete</button>
                    <button class='btn btn-celeste btn-edit-custom mx-auto col-5' data-id='${doc.id}'>Edit</button>
                </div>
            </div>
        </div>
        
        
        
            `;
        });
    
        tasksContainer.innerHTML = html;

        const btnsDelete = document.querySelectorAll(".btn-delete-custom");

        btnsDelete.forEach(btn => {
            btn.addEventListener("click", ({ target: { dataset } }) => deleteTask(dataset.id));
        });

        const btnsEdit = document.querySelectorAll(".btn-edit-custom");

        btnsEdit.forEach(btn => {
            btn.addEventListener("click", async ({ target: { dataset } }) => {
                const doc = await getTask(dataset.id);
                const task = doc.data();

                taskForm["task-title"].value = task.title;
                taskForm["task-content"].value = task.description;

                editStatus = true;
                id = doc.id;

                taskForm['btn-task-save'].innerHTML = 'actualizar';
            });
        });
    });
}

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullDate = new Date();
    const date = getFormattedDate(fullDate);
    const time = getFormattedHour(fullDate);
    const displayName = userGlobal.displayName;
    const photoURL = userGlobal.photoURL;

    const title = taskForm["task-title"].value;
    const description = taskForm["task-content"].value;

    if (!editStatus) {
        createTask(title, description, displayName, date, time ,photoURL );
    } else {
        updateTask(id, ({
            title: title,
            description: description
        }));
        editStatus = false;

        taskForm['btn-task-save'].innerHTML = 'escribe';
    }

    taskForm.reset();
});

function getFormattedDate(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}/${year}`;
}

function getFormattedHour(date) {
    var hour = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minutes}`;
}
