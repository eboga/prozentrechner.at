let inits = document.querySelectorAll(".jsTabInit");

if (inits && inits.length > 0) {
    inits.forEach(init => {
        init.addEventListener("click", event => {
            let children;
            let controls;
            let item;

            // Gets an item, controlled by the init.
            controls = init.getAttribute("aria-controls");
            if (!controls) return;
            item = document.querySelector(`#${controls}`);
            if (!item) return;

            // Removes an active class from the init and all its siblings.
            children = [...init.parentElement.children];
            children.forEach(child => {
                child.classList.remove("isActive");
            });

            // Removes an active class from the item and all its siblings.
            children = [...item.parentElement.children];
            children.forEach(child => {
                child.classList.remove("isActive");
            });


            // Adds an active class to the init and its item.
            init.classList.add("isActive");
            item.classList.add("isActive");
        });
    });
}
