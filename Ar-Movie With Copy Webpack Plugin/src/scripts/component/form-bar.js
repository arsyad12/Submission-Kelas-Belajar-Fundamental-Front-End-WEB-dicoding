class FormBar extends HTMLElement{
    
    
    
    connectedCallback(){
    this.render();
    }

    render(){
        
        this.innerHTML = `

        <style>

        .row{
            padding-top: 50px;
        }

 </style>


<div id="listMovie" class="row"></div>

   
   `;
    }
}

customElements.define("form-bar",FormBar);