/*************************************
 * EDIT YOUR IDS HERE
 *************************************/
const ID_DATABASE = {
  "Bobby Anderson": "Enabled",
  "Heidi Anderson": "Disabled",
  "Billy Anderson": "Enabled"
};
/*************************************/

function checkScan() {
  const result = document.getElementById("result");
  const params = new URLSearchParams(window.location.search);
  const name = params.get("id");

  // No ID provided
  if (!name) {
    result.className = "denied";
    result.innerHTML = "DENIED<br><span class='name'>NO NAME</span> ❌";
    return;
  }

  const status = ID_DATABASE[name];

  if (status === "Enabled") {
    result.className = "approved";
    result.innerHTML = `
      APPROVED<br>
      <span class="name">${name}</span><br>
      ✅
    `;
  } else {
    result.className = "denied";
    result.innerHTML = `
      DENIED<br>
      <span class="name">${name}</span><br>
      ❌
    `;
  }
}

checkScan();
