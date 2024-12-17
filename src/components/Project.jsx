function Project (props) {

    // return (
    //   <div>
    //     <section class="page-section">
    //       <div class="flex-container">
    //         <a href={props.repo}><div class="flex-item " style={{ backgroundImage: `url(${props.image})` }}></div></a>
    //           <h3>{props.name}</h3>
    //           <h5>{props.codeLanguage}</h5>
    //       </div>
    //     </section>
    //   </div>
    // )


    return (
        <div>
        <h2>Portfolio</h2>
        <section class="page-section">
         
         <h2>Work</h2>
         <div class="flex-container">
          
             <div class="flex-item brain-games">
              
              <div class="box-title">
  
              <h3>Brain Games</h3>
              <h5>JavaScript/HTML/CSS</h5>
            </div>
  
             </div>
  
             <div class="flex-item readme-generator">
              <div class="box-title">
  
              <h3>README-Generator</h3>
              <h5>JavaScript/Node</h5>
              </div>
  
             </div>
  
             <div class="flex-item vehicle-builder">
              <div class="box-title">
  
              <h3>Vehicle Builder</h3>
              <h5>TypeScript/Node</h5>
              </div>
  
             </div>
  
         </div>
      </section>
      </div>
    );
  }
    
// Return the proyect componet for each individual proyect props name repo link description.

export default Project