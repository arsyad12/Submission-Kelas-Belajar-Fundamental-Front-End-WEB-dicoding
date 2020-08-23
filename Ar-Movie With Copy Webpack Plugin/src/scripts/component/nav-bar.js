class NavBar extends HTMLElement{
    
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
        *{
            overflow: hidden;
            background-color: rgb(204, 44, 44);
            width:97.6%;
            
         }

         #navbar a{
            
                float: left;
                display: block;
                color: #ffffff;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
                font-size: 17px;
                font-style: oblique;
              
         }
        
        
         #navbar a:hover {
            background-color: rgb(255, 255, 255);
            color: rgb(255, 0, 0);
            
          }
          
          #navbar a.active {
            background-color: red;
            color: white;
          }
          
        
        
        </style>

        <navbar id="navbar">
        <a class="active">AR MOVIE THE NUMBER 1 STREAMING VIDEOS SERVICE</a>
        <a>ENJOY YOUR MOVIE WITHOUT ADS JUST FROM 2$</a>
        <a>WATCHING NETFLIX JUST WITH 4$/MONTH</a>
     </navbar>

   `;
    }
}

customElements.define("nav-bar",NavBar);