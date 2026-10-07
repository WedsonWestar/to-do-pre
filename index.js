let items = [
	"Сделать проектную работу",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта",
	"Прогуляться по улице в солнечный день",
	"Помыть посуду",
];

const listElement = document.querySelector(".to-do__list");
const formElement = document.querySelector(".to-do__form");
const inputElement = document.querySelector(".to-do__input");

function loadTasks() {
	// const savedTasks = localStorage.getItem("tasks");
	return items;
}

function createItem(item) {
	const template = document.getElementById("to-do__item-template");
	const clone = template.content.querySelector(".to-do__item").cloneNode(true);

	const itemElement = clone.querySelector(".to_do__item");

	const textElement = clone.querySelector(".to-do__item-text");
	textElement.textContent = item;

	const deleteButton = clone.querySelector(".to-do__item-button_type_delete");
	const duplicateButton = clone.querySelector(".to-do__item-button_type_duplicate");
	const editButton = clone.querySelector(".to-do__item-button_type_edit");




	return clone;
}

function getTasksFromDOM() {

}

function saveTasks(tasks) {

}

items = loadTasks();

items.forEach(item => listElement.append(createItem(item)));

formElement.addEventListener("submit", (event) => {
	event.preventDefault();

	const item = inputElement.value.trim();
	if (!item) return;

	listElement.prepend(createItem(item));

	inputElement.value = "";
	inputElement.focus();
});