const data = [
    { name: "harry", age: 47, profession: "Hitman" },
    { name: "john", age: 34, profession: "developer" },
    { name: "johnny ", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
    
    
    
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let key of data){
        if(key.profession==="developer"){
            console.log(key)
        }
    }
  }
  
  // 2. Add Data
  function addData() {
   let obj={}
   let newData=['name', 'age' , 'profession'];
    for(let key of newData){
    obj[key]= prompt(`enter your ${key}`);
   }
        // console.log(obj)
        data.push(obj);
        console.log(data);
  }  
  
  // 3. Remove Admins
  function removeAdmin() {
    // for(let key of data){
    //     if(key.profession === 'admin'){
    //         delete key.profession
    //     }
    // }
    const newdata = data.filter(person => person.profession !== 'admin');
    console.log(newdata)
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let a = ['aa',45, 66 , 77];
    let baba_G = ['jap-naam','bolo sache darbar ki jai',420];
    let ans = [...a , ...baba_G];
    console.log(ans);
  }
  
  // 5. Average Age
  function averageAge() {
    let average = 0 ;
    let count = 0 ;
    for(let key of data){
        if(key.age){
            average += key.age
           count++
        }
    }
    if(count > 0){
        console.log(`The average age of all employee is ${average / count} `);
    }else{
        console.log("no data available")
    }
   
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
     let person = []
     let flag= false ;
    for(let key of data){
        if(key.age > 25){
           person.push(key.name) ; 
           flag = true ;
        }
    }

     console.log(`there is ${person} above 25 years`);

     if(!flag){
        console.log('there is no one above 25 years all are babies ')
     }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
      let unique = [];
      for(let key of data){
        let isUnique = true;

        for(let currentprofession of unique){
            if(key.profession === currentprofession){
              isUnique = false ;
              break;
            }
           
        }
        if(isUnique && key.profession){
            unique.push(key.profession)
        }
      }
      console.log(`we have all these different professional with in our adminstartion = ${unique}`)
  }
  
  // 8. Sort by Age
  //bubble  sort
  function sortByAge() {
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = 0; j < data.length - i - 1; j++) {
          if (data[j].age > data[j + 1].age) {
            
            let temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp;
          }
        }
      }
    
      console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
       for(let person of data){
        if(person.name === "john"){
            person.profession ='manager'
        }
       }
       console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let admin = 0 ; 
    let developer = 0 ;
    for( let key of data){
        if( key.profession === "developer"){
            developer++;
        }
        else if(key.profession === "admin"){
            admin++
        }
    }
    console.log(`we have total no. of developer ${developer}`)
    console.log(`we have total no. of admin ${admin}`)
    
  }