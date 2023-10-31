// Written by: Alan Hernandez
// Started & Finished on: October 30, 2023

// Strict mode is enabled (however that even works)
"use strict";

// The following '$' function is used to select any HTML element from the HTML document.
const $ = selector => document.querySelector(selector);

// The event-handler function 'processEntry' is defined below.
const processEntry = evt => {
// Makes the program emphasize on the text box with the HTML ID 'subtotal'.
    $("#subtotal").focus();
// The variables below are defined to make the rest of the code easier to read.
    let input_subtotal = document.querySelector("#subtotal").value;
    let input_taxrate = document.querySelector("#tax_rate").value;
// The following 'if-else' statement makes sure that the values of 'input_subtotal' & 'input_tax_rate' are both valid.
// If the value returns false, an alert is displayed for the user to see.
    if (input_subtotal > 0 && input_subtotal < 10000 && input_taxrate > 0 && input_taxrate < 12) {
// Variable 'input_taxrate' is converted to a decimal & used as the value for 'decimal_num'.
        let decimal_num = input_taxrate/100;
// The 'sales_tax' is calculated by multiplying 'input_subtotal' by 'decimal_num'.
        let sales_tax = input_subtotal * decimal_num;
// The final subtotal is calculated & saved to a variable.
        let final_subtotal = parseFloat(input_subtotal) + sales_tax;
// Both the 
        document.querySelector("#sales_tax").value = sales_tax.toFixed(2);
        document.querySelector("#total").value = final_subtotal.toFixed(2);
    } else if (input_subtotal <= 0 || input_subtotal >= 10000) {
// The following statement displays an alert for the user to see.
// This alert indicates to the user that they entered an invalid number for the Subtotal.
        alert ("ERROR! Invalid Subtotal!\nYour Subtotal must be above 0 & below 10000.\nPlease enter a new value.");
    } else if (input_taxrate <= 0 || input_taxrate >= 12) {
// The following statement displays an alert for the user to see.
// This alert indicates to the user that they entered an invalid number for the Tax Rate.
        alert ("ERROR! Invalid Tax Rate!\nYour Tax Rate must be above 0 & below 12.\nPlease enter a new value.");
    }
};

// The event-handler function 'clearAll' is defined below.
const clearAll = evt => {
// Makes the program emphasize on the text box with the HTML ID 'subtotal'.
    $("#subtotal").focus();
// The following statements clear all values from each textbox.
    $("#subtotal").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
    $("#total").value = "";
};

// The following Event-Listener is activated once the HTML document is fully loaded & DOM is ready,
// (by my understanding at least).
document.addEventListener("DOMContentLoaded", () => {
// The Event Listener below calls the Event-Handler Funtion 'processEntry'
// whenever the '#calculate' ID-element is triggered by the 'click' event.
    $("#calculate").addEventListener("click", processEntry);
// The Event Listener below calls the Event-Handler Funtion 'clearAll'
// whenever the '#clear' ID-element is triggered by the 'click' event.
    $("#clear").addEventListener("click", clearAll);
});