// User's Information (Weight and Height)
var weight = document.getElementById('weight')
var height = document.getElementById('height')

// Result Section that shows information of User's BMI
var resultTitle = document.getElementById('result-title')
var resultDescription = document.getElementById('result-description')

// Run Button Event
const runButton = document.getElementById('send-button')

runButton.addEventListener('click', () => {
    let height_m = height.value / 100
    let total = weight.value / (height_m ** 2)
    let status
    
    if (total < 18.50) {
        status = 'ผอม'
    } else if (total >= 18.50 && total < 22.90) {
        status = 'ปกติ'
    } else {
        status = 'อ้วน'
    }

    resultTitle.innerHTML = `ค่า BMI ของคุณคือ ${total.toFixed(2)}`
    resultDescription.innerHTML = `คุณอยู่ในระดับ ${status}`
})
