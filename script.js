        const token = '882825b6a82784effced27498315b60652e9c0a2'
        var longUrl = ""
        const input = document.querySelector("input")
        const btn = document.querySelector("button")
  
        var result = document.querySelector(".result")

        btn.addEventListener('click', ()=>{
            if(input.value === ""){
                alert("Please input a link")
                return
            }
            if(!(input.value.includes("https://") || input.value.includes("http://"))){
                alert("Please input a valid link")
                return
            }
            btn.innerHTML = "Wait"
            btn.disabled = "true"
            result.innerHTML = ""
            
            
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    long_url: input.value
                })
    
            };
        fetch('https://api-ssl.bitly.com/v4/shorten', config)
            .then(response => response.json())
            .then(data => {
                result.innerHTML = data.id;
                input.value = ""
                btn.removeAttribute('disabled')
                btn.innerHTML = "Create"
                
            })
            .catch(error => {
                console.log(error.message)
                alert("Error, Try Again")
            })
        })
