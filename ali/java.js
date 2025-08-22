function toggleMenu() {
      document.getElementById("menu").classList.toggle("active");
    }
    const searchInput = document.getElementById("search");
    const qaList = document.querySelectorAll(".qa-box");
    const noResult = document.getElementById("noResult");

    searchInput.addEventListener("keyup", function() {
      let filter = searchInput.value.toLowerCase();
      let found = false;

      qaList.forEach(box => {
        let text = box.innerText.toLowerCase();
        if (text.includes(filter)) {
          box.style.display = "block";
          found = true;
        } else {
          box.style.display = "none";
        }
      });

      // Agar kuch nahi mila
      if (!found) {
        noResult.style.display = "block";
      } else {
        noResult.style.display = "none";
      }
    });
      function copyAnswer(button) {
      let answerText = button.parentElement.querySelector(".answer").innerText;
      navigator.clipboard.writeText(answerText).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => {
          button.innerText = "Copy";
        }, 1500);
      });
    }
  