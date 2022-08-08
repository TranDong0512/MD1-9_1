function clickon() {
    let weight = +document.getElementById("kg").value
    let height = +document.getElementById("met").value
    let bmi = weight/(height**2 )
    if (bmi < 18.5){
        document.getElementById("kq").innerHTML="Resurl: quá gầy"
    }else if(18.5 <= bmi && bmi < 25.0) {
        document.getElementById("kq").innerHTML="Resurl: bình thường"
    }else if(25.0 <= bmi && bmi < 30 ){
        document.getElementById("kq").innerHTML="Resurl: hơi béo"
    }else if(30.0 <= bmi)
        document.getElementById("kq").innerHTML="Resurl: quá béo"

}

