// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function findNTermOfFibonacciSequence() {
  // input
  const nTermNumber =
    parseInt(document.getElementById("n-term-number").value) - 2
  let answer = 0
  let firstNumber = 0
  let secondNumber = 1

  if (nTermNumber < 0) {
    document.getElementById("result").innerHTML = firstNumber
  } else {
    document.getElementById("result").innerHTML =
      firstNumber + ", " + secondNumber + ", "
    answer = firstNumber + secondNumber
    for (let counter = 0; counter < nTermNumber; counter++) {
      // output
      answer = firstNumber + secondNumber
      document.getElementById("result").innerHTML =
        document.getElementById("result").innerHTML + answer + ", "
      firstNumber = secondNumber
      secondNumber = answer
    }
  }
  document.getElementById("result").innerHTML =
    document.getElementById("result").innerHTML +
    "<br />" +
    "The nth term is " +
    answer
}
