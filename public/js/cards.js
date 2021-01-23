"use strict";

// handle card dragging
const dragDrop = (imageLinks, projectCardsToDrag, cardContainers) => {
    // remove link default behaviour on images
    imageLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
        });
    });

    projectCardsToDrag.forEach((draggable) => {
        //drag starts
        draggable.addEventListener("dragstart", () => {
            draggable.classList.add("dragging");
            draggable.classList.add("cardGreen");
        });

        //drag stops
        draggable.addEventListener("dragend", () => {
            draggable.classList.remove("dragging");
            draggable.classList.remove("cardGreen");

        });
    });

    // determin element being dragged over.
    cardContainers.forEach((container) => {
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

    //determin mouse position to drop above element below
    const getDragAfterElement = (container, y) => {
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
    };
};
export { dragDrop };