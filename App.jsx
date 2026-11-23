import React,{useEffect,useState}from"react";
const OPS=[['add','➕ Addieren'],['sub','➖ Subtrahieren'],['mul','✖️ Multiplizieren'],['div','➗ Dividieren']];
const rand=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;
const num=d=>rand(10**(d-1),10**d-1);
// Stand: Addition, Subtraktion und Multiplikation aus Backup; Division unverändert separat.
// Vollständiger Quellstand entspricht der aktuell geöffneten Canvas-Vorschau.
