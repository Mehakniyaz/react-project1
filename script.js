var url =
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
var productLoad = () => {

  var data;
  // function addDetail(e, item) {
  //   // console.log(e)
  //   // console.log(item)
  // }

  function createRow(data) {
    tableData = document.createElement("td");
    tableData.innerHTML = data;
    return tableData;
  }
  $.get(url, (data, state) => {
    // console.log(data)
    // console.log(Object.keys(data[0]))
    //  createTable(data)

    for (var i = 0; i < data.length; i++) {
      tr = document.createElement("tr");
      tr.className = "data-row";
      // console.log(data[i])
      // tr.addEventListener("click",()=>{

      //   // console.log(data[i])
      //   addDetail(this,x)
      // })

      tr.addEventListener("click", (function(x){
        return function(){
        console.log(x)
        // tr.addEventListener("click", abc.bind(this, data[i]));
      function abc(x, y) {
        console.log(x.firstName)
        container = `<div><b>User selected:</b>${x.firstName} ${x.lastNamex}</div><div> <b>Description: </b>
    <textarea cols="50" rows="5" readonly>${x.description}</textarea>
</div><div><b>Address:</b>${x.address.streetAddress}</div><div><b>City:</b> ${x.address.city}/div>
<div><b>State:</b>${x.address.state}</div>
<div><b>Zip:</b> ${x.address.zip}</div>
`
        descContainer = document.getElementById("info-content");
        descContainer.innerHTML = container;
        console.log(descContainer);
      }
        }
        
      })(data[i]));





      // ==========================
     // tr.addEventListener("click", abc.bind(this, data[i]));
//       function abc(x, y) {
//         console.log(x.firstName)
//         container = `<div><b>User selected:</b>${x.firstName} ${x.lastNamex}</div><div> <b>Description: </b>
//     <textarea cols="50" rows="5" readonly>${x.description}</textarea>
// </div><div><b>Address:</b>${x.address.streetAddress}</div><div><b>City:</b> ${x.address.city}/div>
// <div><b>State:</b>${x.address.state}</div>
// <div><b>Zip:</b> ${x.address.zip}</div>
// `
//         descContainer = document.getElementById("info-content");
//         descContainer.innerHTML = container;
//         console.log(descContainer);
//       }
//=====================
      // console.log(data[i])
      for (var item in data[i]) {
        if (
          item == "id" ||
          item == "email" ||
          item == "firstName" ||
          item == "lastName" ||
          item == "phone"
        ) {
          // console.log((data[i][item]))
          td = createRow(data[i][item]);
          y = data[i];
          // console.log(y)
          tr.appendChild(td);
        }
      }
      tbody = document.getElementById("x");
      tbody.appendChild(tr);
      // console.log(tbody)
    }
 
  });
};
productLoad();
