class HeadBar extends HTMLElement{
    
    constructor(){
super();
this.shadowDOM=this.attachShadow({mode:"open"});
    }
    
    
    connectedCallback(){
    this.render();
    }

    render(){
        
        this.shadowDOM.innerHTML = `

        <style>
header {
    background-image:linear-gradient(rgba(204, 44, 44, 0.5),rgba(204, 44, 44,0.5)),url(./images/head.jpeg);
    background-size:100% 100%;
    background-position: center;
	 height: 300px;
    padding-top: 100px;
   
 }

 h1{
    text-align: center;
    color: white;
    font-size: 100px ;
    
 }

 </style>

 <style>
 
h1.title {
  padding: 20px;
}

@media screen and (min-width: 601px) {
  h1.title {
    font-size: 80px;
  }
}

@media screen and (max-width: 600px) {
  h1.title {
    font-size: 30px;
  }
}
</style>


 <header id ="header">
 <h1 class="title">WELCOME TO AR MOVIES</h1>
 </header>
   
   `;
    }
}

customElements.define("head-bar",HeadBar);