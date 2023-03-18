const generateTable=()=>{
    // create <table> and <tbody> element

    const table=document.createElement("table");
    const tbody=document.createElement("tbody");

    // create all cell 
    for(let i=0; i<6; i++){
        const trow=document.createElement("tr"); 

        for(let j=0; j<10; j++){
            const tcell=document.createElement("td");

            const celltext=document.createTextNode(`${i},${j}`);

            // inserting content into cell
            tcell.appendChild(celltext);

            // inserting cell into row
            trow.appendChild(tcell);
        }
        // insert row into body
        tbody.appendChild(trow);
    }

    // insert body into table
    table.appendChild(tbody);
    
    // insert table into body
    document.body.appendChild(table);
    
    // set border of table using attribute
    table.setAttribute("border", "2");
}