const dataPlace=document.querySelectorAll('data-place')
const divs=document.querySelectorAll(['.USD','.GBP','.EUR','.JPY','.CAD','.AUD','.CNY'])
const refresh=document.querySelector('.refresh')
const newRate=document.querySelector('.newrate')
const misc=document.querySelector('.MISC')



class Bitcoin{
    constructor(divs, misc){
        this.divs=divs
        this.misc=misc
        this.getPrices(this.divs+1)
        // this.setPrices(this.misc+7)
        // this.newRates(this.misc)
}
//se supone que es "global" if you use document.querySelectorAll

setPrices(divs, prices, misc){ 
    for(let i = 0; i<divs.length; i++){
        divs[i].textContent=prices[i+1]
         }
}

newRates(misc, prices){
    parseInt('')
    misc.textContent=prices
}




//define set prices function above

    getPrices(divs){
        $.ajax({
            url:'https://bitpay.com/api/rates',
            dataType: 'json',
            success:(data)=>{
                this.prices = data
                for(let i=0; i<divs.length; i++){
                    this.prices[i]=data[i].rate
                console.log(data)
                }
                this.setPrices(this.divs, this.prices)
                this.newRates(this.misc, this.prices)
                misc.textContent=data.prices
    
                
            },
            error:error=>{
                console.log('error')
            }
        })
        
    }
    
}

refresh.addEventListener('click', function(e){
    bit.getPrices(divs)
    console.log('refresh')
})

newRate.addEventListener('click', function(e){
    window.prompt('Enter a new rate')
    // bit.newRate(newRate)
    console.log('new rate')
})

const bit = new Bitcoin(divs)







