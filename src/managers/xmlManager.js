const xmlReader = require('xml-reader');

const parseXml = function(xml) {
    const result = xmlReader.parseSync(xml);
    
    let output = "";
    let tableName = result.name;
    let columnNode = result.children;
    let columnNames = [];
    let columnValues = [];
    let insertCommand = "";
    columnNode.forEach(element => {
        let colArray = element.children;
        colArray.forEach(col => {
            if(!columnNames.includes(col.name)) {
                columnNames.push(col.name);
            }
            let colValue = col.children[0].value;
            columnValues.push(`'${colValue}'`);
        });
        
        // insert command (one for each table to avoid excessive writes)
        insertCommand += ` INSERT INTO ${tableName} (${columnNames.join()}) VALUES (${columnValues.join()})`
        columnValues = [];
    });

    // run commands on db by passing in text strings and calling function from dbOperation
    let columnNamesAndTypes = columnNames.map(i => i + " varchar(5000)");
    let createTableCommand = `CREATE TABLE ${tableName} (${columnNamesAndTypes})`
    
    output+=createTableCommand+"\n"+insertCommand+"\n";
    return output;
}

module.exports = {
    parseXml,
}
