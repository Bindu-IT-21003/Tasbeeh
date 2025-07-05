
    let total = 0;
    let rounds = 0;

    function Increase() {
      total++;

      if (total >= 100) {
        total = 0;
        rounds++;

        if (rounds >= 10) {
          document.getElementById("message").innerText = " spiritual goal achieved";
          rounds = 0; // rounds reset on 10
        } else {
          document.getElementById("message").innerText = rounds + " Full Tasbeeh Done";
        }
      } else {
        document.getElementById("message").innerText = "";
      }

      updateCounter();
    }

    function Reset() {
      total = 0;
      rounds = 0;
      document.getElementById("message").innerText = "";
      updateCounter();
    }

    function updateCounter() {
      document.getElementById("total").innerText = "Total: " + total;
      document.getElementById("rounds").innerText = "Rounds: " + rounds;
    }
  