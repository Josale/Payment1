class Payment{
	constructor(id, name, acc, title, desc){
		this.id = id
		this.name = name
		this.account = acc
		this.title = title
		this.description = desc
	}
	getText(){
		return `|PL|${this.id}|${this.name}|${this.account}|${this.title}|${this.description}|`
	}
	getCode(){
		let qr = new QRCode('qrc')
		qr.makeCode(this.id)
	}
	generateQrcode(){
		
	}
}

let obiekty = []
let o1 = new Payment("01 8191 0003 2211 5626 4067 1090", 123.45, "Orange", "Przelew za telefon", "")
obiekty.push(o1)
obiekty.push(new Payment("11 8891 3333 1122 5662 4607 1900", 123.45, "Plus", "Pieniądze za las", "Pieniądze"))
obiekty.push(new Payment("01 8191 3000 1122 5626 7604 1090", 123.45, "Orange", "Przelew za telefon", ""))

obiekty.forEach((e) => {
	document.body.innerHTML = document.body.innerHTML + `${e.name}<br>${e.account}<br>${e.title}<br><br>`
})
//document.body.innerHTML = document.body.innerHTML + obiekty[0].getText()