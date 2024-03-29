function createCustomSelect() {
  /**
   * Custom dropdown select start
   */

  /* Look for any elements with the class "custom-select" for one or if later 
added more select tooltip: */

  const customSelects = document.getElementsByClassName("custom-select");

  for (const customSelect of customSelects) {
    const selElmnt = customSelect.getElementsByTagName("select")[0];

    /* For each element, create a new DIV that will act as the selected item: */
    const selectSelected = document.createElement("DIV");
    selectSelected.setAttribute("class", "select-selected pricing");
    selectSelected.innerHTML =
      selElmnt.options[selElmnt.selectedIndex].innerHTML;
    customSelect.appendChild(selectSelected);

    /* For each element, create a new DIV that will contain the option list: */
    const optionList = document.createElement("DIV");
    optionList.setAttribute("class", "select-items select-hide");

    for (const el of selElmnt) {
      /* For each option in the original select element,
    create a new DIV that will act as an option item: */
      const option = document.createElement("DIV");
      option.classList.add("pricing");
      option.innerHTML = el.innerHTML;

      option.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        const select =
          this.parentNode.parentNode.getElementsByTagName("select")[0];
        const selected = this.parentNode.previousSibling;
        for (let el of select) {
          const elInneText = el.innerText.replace(/\s+/g, " ").trim();
          const thisInnerText = this.innerText.replace(/\s+/g, " ").trim();

          if (elInneText == thisInnerText) {
            select.selectedIndex = Array.from(select).indexOf(el);
            selected.innerHTML = this.innerHTML;
            const sameAsSelected =
              this.parentNode.getElementsByClassName("same-as-selected");
            for (const el of sameAsSelected) {
              el.removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        selected.click();
      });
      optionList.appendChild(option);
    }

    customSelect.appendChild(optionList);
    selectSelected.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
    setLastWordColor();
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
except the current select box: */

    const selectItem = document.getElementsByClassName("select-items");
    const selectSelected = document.getElementsByClassName("select-selected");
    let arrNo = [];

    for (let i = 0; i < selectSelected.length; i++) {
      elmnt == selectSelected[i]
        ? arrNo.push(i)
        : selectSelected[i].classList.remove("select-arrow-active");
    }
    for (let i = 0; i < selectItem.length; i++) {
      arrNo.indexOf(i) ? selectItem[i].classList.add("select-hide") : "";
    }
  }

  function setLastWordColor() {
    const phrases = document.querySelectorAll(".pricing");

    phrases.forEach((phrase) => {
      const words = phrase.innerHTML.trim().split(" ");
      words[2] = `<span class="last-word">${words[2]}</span>`; // this would return the second word
      phrase.innerHTML = words.join(" ");
    });
  }

  /* If the user clicks anywhere outside the select box,
then close all select boxes: */
  document.addEventListener("click", closeAllSelect);
}
export default createCustomSelect;
