"use strict";

const img_links = document.querySelectorAll("a");
const draggables = document.querySelectorAll("article");
const constainers = document.querySelectorAll(".card-list");

// remove link default behaviour on images
img_links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
    });
});

draggables.forEach((draggable) => {
    //dragg starts
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
    });

    //drag stops
    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
});

// determin element being dragged over.
constainers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);

        const draggable = document.querySelector(".dragging");

        if (afterElement == null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        }
    });
});

//determin mouse position to drop above elemnt below
function getDragAfterElement(container, y) {
    const draggableElements = [
        ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
        (clossest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;

            if (offset < 0 && offset > clossest.offset) {
                return { offset: offset, element: child };
            } else {
                return clossest;
            }
        }, {
            offset: Number.NEGATIVE_INFINITY,
        }
    ).element;
}