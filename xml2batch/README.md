# XML to SQL Converter

## Summary
 This application provides a web interface that allows users to upload a folder of XML files and get a single SQL db file (.bat). The intended use case for this application is to help data teams convert XML files from a previous DB export into a SQL database. 

 ## Required Format
 ```
 <XML>
 ```

## How to Use
Drag and drop files into the file upload section of the interface. The backend will create a new database and parse each XML file into a table with the nodes as the column names. As of the current version (0.1.0), the datatype of each column will be VARCHAR(5000). In future versions, I hope to incorporate more appropriate types using Regex. 