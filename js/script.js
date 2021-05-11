// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

function calculateClicked () {
  // this function calculates the volume of a pyramid

  // input
  const length = parseFloat(document.getElementById("length").value)
  const width = parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById("user-volume").innerHTML = 'The volume is: ' + volume + ' cm³'
}
