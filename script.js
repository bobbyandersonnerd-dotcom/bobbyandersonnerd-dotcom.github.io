/*************************************
 * EDIT YOUR IDS HERE
 *************************************/
const ID_DATABASE = {
  "Bobby Anderson": "Enabled",
  "Billy Anderson": "Enabled",
  "Heidi Anderson": "Disabled",
  "STAFF-77": "Disabled"
};
/*************************************/

function checkScan() {
  const result = document.getElementById("result");
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    result.className = "denied";
    result.innerHTML = "NO ID<br>❌";
    return;
  }

  const status = ID_DATABASE[id];

  if (status === "Enabled") {
    result.className = "approved";
    result.innerHTML = "APPROVED<br>✅";
  } else {
    result.className = "denied";
    result.innerHTML = "DENIED<br>❌";
  }
}

checkScan();
