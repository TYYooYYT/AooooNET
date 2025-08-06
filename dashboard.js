const db = firebase.firestore();
function addRecord() {
  const name = document.getElementById("clientName").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const type = document.getElementById("type").value;
  const note = document.getElementById("note").value.trim();
  if (!name || !amount) return alert("يرجى ملء الاسم والمبلغ");

  db.collection("accounts").add({
    name, amount, type, note, timestamp: new Date()
  }).then(() => {
    document.getElementById("clientName").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("note").value = "";
    loadRecords();
  });
}

function loadRecords() {
  db.collection("accounts").orderBy("timestamp", "desc").get().then(snapshot => {
    const tbody = document.querySelector("#recordsTable tbody");
    tbody.innerHTML = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${data.name}</td>
        <td>${data.amount}</td>
        <td>${data.type === "credit" ? "له" : "عليه"}</td>
        <td>${data.note || ""}</td>
        <td><button onclick="deleteRecord('${doc.id}')">حذف</button></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function deleteRecord(id) {
  db.collection("accounts").doc(id).delete().then(loadRecords);
}
window.onload = loadRecords;