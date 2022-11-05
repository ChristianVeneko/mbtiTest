export const data = [
  {
    question: "In which controller type can you embed a service call?",
    choices: ["Configuration controller", "Interface controller", "Component controller", "View controller"],
    answer: "Component controller",
  },

  {
    question: "The software component for a customer package can be...",
    choices: ["Database layer", "Any SAP software component (i.e., SAP_APPL, SAP_BASIS, SAP_HR, etc.)", "Application Layer", "HOME"],
    answer: "HOME",
  },

  {
    question: "What do you have to take into account before you decide to buffer a table?",
    choices: ["The entire table content must be loaded into the table buffer", "The database server must allow table buffering", "The data read from the buffer may NOT be current", "The data must always be read from the buffer"],
    answer: "The data read from the buffer may NOT be current",
  },

  {
    question: "In an ABAP program, you to assign an initial value to an elementary data object when you define it. Which addition must you use?",
    choices: ["OBLIGATORY", "READ-ONLY", "DEFAULT", "VALUE"],
    answer: "VALUE",
  },

  {
    question: "In which database table type is there a one-to-one relationship between the Dictionary table definition and the relevant physical table in the database?",
    choices: ["Transparent table", "Internal table", "Cluster table", "Pooled table"],
    answer: "Transparent table",
  },

  {
    question: "You want to select all the records from a database table where field CITY contains substring ‘BU’ in any position. Which WHERE clause can you use in an Open SQL select statement?",
    choices: ["WHERE city LIKE ‘_BU’", "WHERE city LIKE ‘%BU*’", "WHERE city LIKE ‘*BU*’", "WHERE city LIKE ‘%BU%’"],
    answer: "WHERE city LIKE ‘%BU%’",
  },


  {
    question: "What does SAP recommend that you use a hashed table?",
    choices: ["When a table must be accessible by both index and key", "When a table must be sorted automatically by key in ascending order", "When a table is very large and you want to access the table by index only.", "When a table is very large and you want to access the table by key only"],
    answer: "When a table is very large and you want to access the table by key only",
  },


  {
    question: "What is the root class in the RTTS inheritance tree?",
    choices: ["CL_ABAP_DATADESCR", "CL_ABAP_ELEMDESCR", "CL_ABAP_COMPLEXDESCR", "CL_ABAP_TYPEDESCR"],
    answer: "CL_ABAP_TYPEDESCR",
  },

  {
    question: "You want to loop over an internal table without copying each table row to a work area. How can you achieve this using a field symbol?",
    choices: ["LOOP ... INTO <field_symbol> TRANSPORTING ... ENDLOOP.", "LOOP ... REFERENCE INTO <field_symbol> ... ENDLOOP.", "LOOP ...ASSIGNING <field_symbol> ...ENDLOOP.", "LOOP ...INTO <field_symbol> ...ENDLOOP."],
    answer: "LOOP ...ASSIGNING <field_symbol> ...ENDLOOP.",
  },

  {
    question: "What type of method is generated automatically by the Web Dynpro Explorer when you assign an action to a button UI element?",
    choices: ["Supply function", "Event handler method", "Ordinary method", "Standard hook method"],
    answer: "Event handler method",
  },

  {
    question: "After which statement will the runtime system initialize the ABAP memory?",
    choices: ["LEAVE TO TRANSACTION", "SUBMIT", "CALL TRANSACTION", "SUBMIT… AND RETURN"],
    answer: "LEAVE TO TRANSACTION",
  },

  {
    question: "When must a foreign key have domain equality?",
    choices: ["For a text table", "Always", "For a check field", "Never"],
    answer: "For a check field",
  },

  {
    question: "When are the changes to the VB* table transferred to the database?",
    choices: ["When an update function module is executed", "When the enqueue work process is executed", "When the update work process is executed", "When the main program is executed"],
    answer: "When the update work process is executed",
  },

  {
    question: "You want to add a field type CURR to a transparent table. What else must you do?",
    choices: ["Add a check table that contains a field of type CUKY.", "Create a reference to a field of type CUKY.", "Add a key fieldof type CUKY.", "Create a new field CUKY as a pre-defined type."],
    answer: "Create a reference to a field of type CUKY.",
  },

  {
    question: "What can you change in the ABAP Debugger?",
    choices: ["Content of an internal table", "Definition of a structure", "Value of a constant", "Value of a reference variable"],
    answer: "Content of an internal table",
  },

  {
    question: "Which of the following variables is the self-reference variable in ABAP OO?",
    choices: ["SUPER", "SENDER", "THIS", "ME"],
    answer: "ME",
  },

  {
    question: "In an ABAP program you have the following code sequence:",
    choices: ["The type of <fs>", "The default type STRING", "The type of var", "The default type I"],
    answer: "The type of var",
  },

  {
    question: "You want to create a transparent table in the ABAP dictionary. When the table is physically created in the database?",
    choices: ["When you save the table", "When you activate the table", "When you run the database utility transaction (SE14)", "When you insert the table name and select create"],
    answer: "When you activate the table",
  },

  {
    question: "The order of fields for a transparent table in the database…",
    choices: ["Is created in the order of the Data Dictionary.", "Is allowed to be different than the ABAP Dictionary.", "Needs to match the ABAP Dictionary.", "Is created in the order of the ABAP Dictionary."],
    answer: "Is allowed to be different than the ABAP Dictionary.",
  },

  {
    question: "You write the following ABAP statement:\nSELECT SINGLE carrid, connid, cityfrom, cityto FROM spfli \nINTO @gs_spfli \nWHERE carrid = @pa_car AND connid = @pa_con. \nHow are the selected fields placed into target structure gs_spfli?"
    ,
    choices: ["From left to right", "Into fields with the same name", "Into fields with the same name and same type", "Into fields with the same type"],
    answer: "From left to right",
  },
];
